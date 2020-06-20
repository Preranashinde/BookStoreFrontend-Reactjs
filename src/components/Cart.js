
import React, { Component } from "react";
import CustomerDetails from './CustomerDetails';
import HomeDataLayer from '../DataLayer/HomeDataLayer'
import { Link } from 'react-router-dom';

var data = new HomeDataLayer();

class Cart extends Component {
    constructor() {
        super()
        this.state = {
            cartBookList: [],
            toggle: false,
            summaryToggle: false
        }
    }

    async componentDidMount() {
        await data.fetchAllCartBook(response => {
            console.log("nmdnscmjsdncjsdnck", response)
            this.setState({
                cartBookList: response
            })
        })
    }

    async handleChangeBookRemove(e) {
        await data.removeFromCart(101, e, 1)
        await data.fetchAllCartBook(response => {
            console.log("prerana", response)
            this.setState({
                cartBookList: response
            })
        })
        // window.location.reload(true)
    }

    handleChangeBookDec(e) {
        let q = e.bookQuantity - 1;
        console.log("value of q ", q)
        data.updateCart(101, e.id, q)
        // window.location.reload(true)
        data.fetchAllCartBook(response => {
            console.log(response)
            this.setState({
                cartBookList: response
            })
        })
      
    }

    handleChangeBookInc(e) {
        let q = e.bookQuantity + 1;
        console.log("value of q ", q)
        data.updateCart(101, e.id, q)
        // window.location.reload(true)
        data.fetchAllCartBook(response => {
            console.log(response)
            this.setState({
                cartBookList: response
            })
        })
        
    }


    handleChangeEnableCustomerDetails = () => {
        this.setState({
            toggle: true
        })
    }

    handleChangeEnableOrderSummary = () => {
        this.setState({
            summaryToggle: true
        })
    }



    render() {
        return (
            <div>

                <div>
                    <div style={{ marginLeft: '200px', marginRight: '200px', marginTop: '20px', marginBottom: '20px', outlineStyle: 'groove', outlineWidth: 'thin' }}>
                        <h5 style={{ marginLeft: '30px' }}> My cart ({this.state.cartBookList.length})</h5>
                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>
                            {this.state.cartBookList.map(book => (
                                <div style={{ marginLeft: '30px', marginTop: '20px', height: '160px', marginBottom: '30px', width: '95%', outlineColor: '#F8F8F8', outlineWidth: 'thin', borderBottom: 'groove', display: 'flex', flexDirection: 'row' }} key={book.id}>
                                    <img style={{ width: '110px', height: '140px' }} src={book.image} alt="" />
                                    <div style={{ marginLeft: '50px', paddingRight: '30px' }}>
                                        <text is="x3d" style={{ width: '200px' }}>{book.title}</text><br></br><br></br>
                                        <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br>
                                        <h6>Rs. {book.price}</h6>
                                        

                                        <button style={{ width: '25px', marginLeft: '4px', borderRadius: '25px' }} onClick={() => this.handleChangeBookDec(book)}>-</button>
                                        <input style={{ width: '22px', textAlign: 'center', fontWeight: 'bold', marginLeft: '4px', height: '20px' }} readOnly value={book.bookQuantity}></input>
                                        <button style={{ width: '20px', marginLeft: '4px', borderRadius: '20px' }} onClick={() => this.handleChangeBookInc(book)}>+</button>
                                        <button style={{ width: '80px', textAlign: 'center', fontWeight: 'bold', marginLeft: '4px', height: '25px' }} onClick={() => this.handleChangeBookRemove(book.id)}>Remove</button>


                                    </div>
                                </div>
                            ))}

<button style={{ marginBottom: '9px', marginLeft: '800px', backgroundColor: '#4863A0', color: 'white', width: '140px', height: '37px', fontWeight: 'bold' }}>PLACE ORDER</button>

                        </div>
                    </div><div style={{ border: '1px solid red', marginLeft: '200px', marginRight: '200px', marginTop: '10px' }}>
                        <span></span>
                        <button className="btn-style-custom" >Customer Details</button>
                        <button style={{ marginLeft: '600px', width: '30px', backgroundColor: 'white', border: 'white' }} >Edit</button>
                        {<CustomerDetails />}
                    </div>
                    <div style={{ border: '1px solid red', marginLeft: '200px', marginRight: '200px', marginTop: '10px' }}>
                        <h6 style={{ marginLeft: '10px', padding: '20px' }}>Order Summary</h6>

                        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>
                            {this.state.cartBookList.map(book => (
                                <div style={{ marginLeft: '30px', marginTop: '20px', height: '160px', marginBottom: '30px', width: '95%', outlineColor: '#F8F8F8', outlineWidth: 'thin', display: 'flex', flexDirection: 'row' }} key={book.id}>
                                    <img style={{ width: '110px', height: '140px' }} src={book.image} alt="" />
                                    <div style={{ marginLeft: '50px', paddingRight: '100px' }}>
                                        <text is="x3d" style={{ width: '200px' }}>{book.title}</text><br></br>
                                        <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text>
                                        <h6>Rs. {book.price * book.bookQuantity}</h6>
                                        <h6 style={{ width: '70px', textAlign: 'center', fontWeight: 'bold' }}>Qty. {book.bookQuantity}</h6>
                                    </div>
                                </div>
                            ))}
                            <Link to="OrderConfirm" >
                                <button style={{ marginBottom: '9px', marginLeft: '800px', backgroundColor: '#4863A0', color: 'white', width: '140px', height: '37px', fontWeight: 'bold' }}>CHECKOUT</button>
                            </Link>
                        </div>
                    </div>

                </div>
                <footer style={{ backgroundColor: '#660000', color: 'white', height: '60px', width: '1250px', marginLeft: '60px', marginRight: '60px', marginTop: '10px', bottom: '0px', position: 'sticky' }}>
                    <br></br>
                    <text style={{ marginLeft: '351px' }}>Copyright &#169; 2020, Bookstore Private Limited. All Rights Reserved</text>
                </footer>
            </div>
        );
    }

}
export default Cart




