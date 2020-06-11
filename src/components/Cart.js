
import React, { Component } from "react";
import HomeDataLayer from '../DataLayer/HomeDataLayer'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveIcon from '@material-ui/icons/Remove';
import Crop169Icon from '@material-ui/icons/Crop169';

var bookData = new HomeDataLayer();

class Cart extends Component {
    constructor() {
        super()
        this.state = {
            bookList: []
        }
    }

    async componentDidMount() {
        await bookData.getCartItems(response => {
            this.setState({
                bookList: response
            })
        });
        console.log(this.state.bookList);
    }

    render() {
    return (
        <div>
            <div style={{ border: '1px solid red', marginLeft: '180px', marginRight: '180px' }}>
                <div>
                    <h6 className="heading_style"> My cart(1)</h6>
<div className="cart">
                
                {this.state.bookList.map(book => (
                    <div className="cartList" key={book.id}>
                       
                        <div>
                        <img style={{ width: '145pxpx', height: '180px', justifySelf:'centre' }} src={book.image} alt="" /><br></br>
                            <text is="x3d"style={{ width: '200px' , height:'0px'}}>{book.bookTitle}</text><br></br>
                            <text style={{ opacity: '0.5', height:'0px',fontSize:'11px' }} > by {book.authorName}</text><br></br>
                            <h9 style={{height:'0px'}}>Rs. {book.price}</h9><br></br>
                        </div>
                            <div>
                            <RemoveIcon style={{marginLeft:'20px'}}/>  <Crop169Icon style={{fontSize:'large'}}/>  < AddCircleOutlineIcon />
                            
                            <button style={{ fontFamily: "fontawesome", width: '100px', height: '30px', marginLeft: '3.5px' }}>REMOVE</button>
                        </div>
                        </div>
                    
                ))}
               
            </div>
       
                </div>
                <div>
                 
                    <button className="btn-style-remove">Remove</button>

                </div>
                <div>
                    <button className="placeorder-btn" onClick={() => this.hideComponent("showHide")}>PLACE ORDER</button>
                </div>
            </div>
            <div style={{ border: '1px solid red', height: '40px', marginLeft: '180px', marginRight: '180px', marginTop: '10px' }}>
                <button className="customer">Customer Details</button>
            </div>
            <div style={{ border: '1px solid red', height: '40px', marginTop: '10px', marginLeft: '180px', marginRight: '180px' }}>
                <button className="order-summary" >Order Summary</button>
            </div>

        </div>
    );
}
}
export default Cart



    
       