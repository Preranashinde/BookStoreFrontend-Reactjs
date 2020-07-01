
import React from "react";
//import CustomerDetails from './CustomerDetails';
import HomeDataLayer from '../DataLayer/HomeDataLayer'
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';

var data = new HomeDataLayer();

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            cartBookList: [],
            toggle: false,
            summaryToggle: false,
            name: '',
            pincode: '',
            locality: '',
            address: '',
            city: '',
            landmark: '',
            addressType: '',
            home: false,
            work: false,
            other: false,
            orderId: ''
        }
    }

    async componentDidMount() {
        await  data.fetchAllCartBook(response => {
             console.log(response)
             this.setState({
                 cartBookList: response
             })
         })
        await  data.fetchAllCartBook(response => {
             this.props.dispatch({ type: "cartUpdate", payload: response.length })
         })
         await data.fetchAllWishlistBook(response => {
             this.props.dispatch({ type: "wishListUpdate", payload: response.length })
         })
     }
 
     async handleChangeBookRemove(e) {
         await data.removeFromCart(e, 1)
         await data.fetchAllCartBook(response => {
             console.log("raj", response)
             this.setState({
                 cartBookList: response
             })
             this.props.dispatch({ type: "cartUpdate", payload: response.length })
         })
     }
 
      handleChangeBookDec(e) {
         let q = e.bookQuantity - 1;
           data.updateCart(e.id, q)
          data.fetchAllCartBook(response => {
             this.setState({
                 cartBookList: response
             })
             this.props.dispatch({ type: "cartUpdate", payload: response.length })
         })
     }
    
      handleChangeBookInc(e) {
         let q = e.bookQuantity + 1;
          data.updateCart(e.id, q)
          data.fetchAllCartBook(response => {
             this.setState({
                 cartBookList: response
             })
             this.props.dispatch({ type: "cartUpdate", payload: response.length })
         })
     }
 
     handleChangeEnableCustomerDetails = async() => {
         await data.isCustomerDetailsExisted(response => {
             console.log("result : ", response)
             if (response === 'true') {
              this.setState({
                 toggle: false,
                 summaryToggle: true
             })
             console.log("toggle : ", this.state.toggle);
             console.log("summarytoggle : ", this.state.summaryToggle);
         }else {
             this.setState({
                 toggle: true,
                 summaryToggle: false
             })
             console.log("toggle123 : ", this.state.toggle);
             console.log("summarytoggle : ", this.state.summaryToggle);
         }
         })
     }
 
     handleChangeEnableOrderSummary = async () => {
 
         if (this.state.home) {
             await this.setState({
                 addressType: 'home'
             })
         }
         if (this.state.work) {
             await this.setState({
                 addressType: 'work'
             })
         }
         if (this.state.other) {
             await this.setState({
                 addressType: 'other'
             })
         }
 
         console.log("type", this.state.addressType);
 
         await data.addCustomerDetails(this.state.name, this.state.pincode, this.state.locality, this.state.address, this.state.city, this.state.landmark, this.state.addressType)
         await this.setState({
             summaryToggle: true,
             toggle: false
         })
 
     }
 
     handleSetName = (e) => {
         this.setState({
             name: e.target.value
         })
     }
 
     handleSetPincode = (e) => {
         this.setState({
             pincode: e.target.value
         })
     }
 
     handleSetLocality = async (e) => {
         await this.setState({
             locality: e.target.value
         })
     }
 
     handleSetAddress = (e) => {
         this.setState({
             address: e.target.value
         })
     }
 
     handleSetCity = (e) => {
         this.setState({
             city: e.target.value
         })
     }
 
     handleSetLandmark = async (e) => {
         await this.setState({
             landmark: e.target.value,
         })
     }
 
     handleSelectHome = async () => {
         await this.setState({
             work: false,
             home: true,
             other: false
         })
     }
 
     handleSelectWork = async () => {
         await this.setState({
             work: true,
             home: false,
             other: false
         })
         console.log("work", this.state.work);
     }
 
     handleSelectOther = async () => {
         await this.setState({
             work: false,
             home: false,
             other: true
         })
         console.log("other", this.state.other);
     }
 
     async handleChangePlaceOrder() {
         await data.placeOrder(response => {
             console.log("order id : ", response)
             
         })
     }
 

    render() {

        return (
            
            <div>
              
                <div>
               
                    <div>
                        <div style={{ marginLeft: '200px', marginRight: '200px', marginTop: '20px', marginBottom: '20px', outlineStyle: 'groove', outlineWidth: 'thin' }}>
                            <h3 style={{ marginLeft: '30px' }}> My cart ({this.state.cartBookList.length})</h3>
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>
                                {this.state.cartBookList.map(book => (
                                    <div style={{ marginLeft: '30px', marginTop: '20px', height: '160px', marginBottom: '30px', width: '95%', outlineColor: '#F8F8F8', outlineWidth: 'thin', borderBottom: 'groove', display: 'flex', flexDirection: 'row' }} key={book.id}>
                                        <img style={{ width: '110px', height: '140px' }} src={book.picPath} alt="" />
                                        <div style={{ marginLeft: '50px', paddingRight: '30px' }}>
                                            <text is="x3d" style={{ width: '200px' }}>{book.nameOfBook}</text><br></br><br></br>
                                            <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br>
                                            <h6>Rs. {book.price}</h6>


                                            <button style={{ width: '25px', marginLeft: '4px', borderRadius: '25px' }} onClick={() => this.handleChangeBookDec(book)}>-</button>
                                            <input style={{ width: '22px', textAlign: 'center', fontWeight: 'bold', marginLeft: '4px', height: '20px' }} readOnly value={book.bookQuantity}></input>
                                            <button style={{ width: '20px', marginLeft: '4px', borderRadius: '20px' }} onClick={() => this.handleChangeBookInc(book)}>+</button>
                                            <button style={{ width: '80px', textAlign: 'center', fontWeight: 'bold', marginLeft: '4px', height: '25px' }} onClick={() => this.handleChangeBookRemove(book.id)}>Remove</button>


                                        </div>
                                    </div>
                                ))}



                                <button style={{ marginBottom: '9px', marginLeft: '800px', backgroundColor: '#4863A0', color: 'white', width: '140px', height: '37px', fontWeight: 'bold' }} onClick={this.handleChangeEnableCustomerDetails}>PLACE ORDER</button>



                            </div>
                        </div>

                        <div style={{ marginLeft: '200px', marginRight: '200px', marginBottom: '40px', outlineStyle: 'groove', outlineWidth: 'thin' }}>
                            <h3 style={{ marginLeft: '10px', padding: '20px' }}>Customer Details</h3>
                            {this.state.toggle ?
                                <form>
                                    <input style={{ marginLeft: '30px', height: '30px', marginBottom: '10px', width: '225px' }} placeholder="Name" required onChange={(e) => this.handleSetName(e)}></input> <br />
                                    <input style={{ marginLeft: '30px', height: '30px', marginBottom: '10px', width: '225px' }} maxLength='6' type='number' pattern="^[1-9][0-9]{5}$" placeholder="Pincode" required onChange={(e) => this.handleSetPincode(e)}></input>
                                    <input style={{ marginLeft: '30px', height: '30px', marginBottom: '10px', width: '225px' }} placeholder="Locality" required onChange={(e) => this.handleSetLocality(e)}></input><br />
                                    <textarea style={{ marginLeft: '30px', height: '50px', marginBottom: '10px', width: '488.7px' }} placeholder="Address" required onChange={(e) => this.handleSetAddress(e)}></textarea> <br />
                                    <input style={{ marginLeft: '30px', height: '30px', marginBottom: '10px', width: '225px' }} placeholder="City/Town" required onChange={(e) => this.handleSetCity(e)}></input>
                                    <input style={{ marginLeft: '30px', height: '30px', marginBottom: '10px', width: '225px' }} placeholder="Landmark" required onChange={(e) => this.handleSetLandmark(e)}></input> <br />
                                    <div style={{ marginLeft: '30px' }}>
                                        <h4>Type</h4>
                                        <input type="radio" name="type" style={{ marginBottom: '40px' }} onChange={this.handleSelectHome} /> Home
                            <input type="radio" name="type" style={{ marginLeft: '30px' }} onChange={this.handleSelectWork} /> Work
                            <input type="radio" name="type" style={{ marginLeft: '30px' }} onChange={this.handleSelectOther} /> Other
                        </div>
                                    <input style={{ marginLeft: '800px', marginBottom: '20px', backgroundColor: '#4863A0', color: 'white', width: '140px', height: '37px', fontWeight: 'bold' }} type="submit" value="CONTINUE" onClick={this.handleChangeEnableOrderSummary} />
                                </form> : null}
                        </div>
                    </div>

                    <div style={{ border: '1px solid red', marginLeft: '200px', marginRight: '200px', marginTop: '5px' }}>
                        <h3 style={{ marginLeft: '10px', padding: '20px' }}>Order Summary</h3>
                        {this.state.summaryToggle ?
                            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>
                                {this.state.cartBookList.map(book => (
                                    <div style={{ marginLeft: '30px', marginTop: '20px', height: '160px', marginBottom: '30px', width: '95%', outlineColor: '#F8F8F8', outlineWidth: 'thin', display: 'flex', flexDirection: 'row' }} key={book.id}>
                                        <img style={{ width: '110px', height: '140px' }} src={book.picPath} alt="" />
                                        <div style={{ marginLeft: '50px', paddingRight: '100px' }}>
                                            <text is="x3d" style={{ width: '200px' }}>{book.nameOfBook}</text><br></br>
                                            <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text>
                                            <h6>Rs. {book.price * book.bookQuantity}</h6>
                                            <h6 style={{ width: '70px', textAlign: 'center', fontWeight: 'bold' }}>Qty. {book.bookQuantity}</h6>
                                        </div>
                                    </div>
                                ))}
                                <Link to="OrderConfirm" >
                                    <button style={{ marginBottom: '9px', marginLeft: '800px', backgroundColor: '#4863A0', color: 'white', width: '140px', height: '37px', fontWeight: 'bold' }} onClick={this.handleChangePlaceOrder}>CHECKOUT</button>
                                </Link>
                            </div> : null}
                    </div>

                </div>
                
              
            </div>

        );
    }

}
const mapStateToProps = (state) => ({
    cartCount: state.cartCount
});

export default connect(mapStateToProps)(Cart);






