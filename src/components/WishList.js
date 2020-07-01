import React, { Component } from "react";
import { connect } from 'react-redux';
import HomeDataLayer from '../DataLayer/HomeDataLayer';

var data = new HomeDataLayer();

class WishList extends Component {
    constructor() {
        super()
        this.state = {
            wishlistBooks: []
        }
    }

    async componentDidMount() {
        await data.fetchAllWishlistBook(response => {
            console.log(response)
            this.setState({
                wishlistBooks: response
            })
        })
        await data.fetchAllCartBook(response => {
            this.props.dispatch({ type: "cartUpdate", payload: response.length })
        })
        await data.fetchAllWishlistBook(response => {
            this.props.dispatch({ type: "wishListUpdate", payload: response.length })
        })
        
    }

    handleClickAddToCart = async (e) => {
        await data.addToCart(e, 1)
        await data.removeFromWishList(e,1)
        await data.fetchAllWishlistBook(response => {
            this.setState({
                bookList: response
            })
        })
        await data.fetchAllCartBook(response => {
            this.setState({
                cartBookCount: response.length
            })
        })
    }

async handleChangeBookRemove(e) {
    await data.removeFromWishList(e, 1)
    await data.fetchAllWishlistBook(response => {
        console.log("raj", response)
        this.setState({
            wishlistBooks: response
        })
       
    })
}
    
render() {
        return (
           <div>
            <div style={{ marginLeft: '200px', marginRight: '200px', marginTop: '20px', marginBottom: '20px', outlineStyle: 'groove', outlineWidth: 'thin' }} >
                <h5 style={{ marginLeft: '30px' }}> My WishList ({this.state.wishlistBooks.length})</h5>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>
                    {this.state.wishlistBooks.map(book => (
                    <div style={{ marginLeft: '30px', marginTop: '20px', height: '160px', marginBottom: '30px', width: '95%', outlineColor: '#F8F8F8', outlineWidth: 'thin', borderBottom: 'groove', display: 'flex', flexDirection: 'row' }} key={book.id}>
                        <img style={{ width: '110px', height: '140px' }} src={book.picPath} alt="" />
                        <div style={{ marginLeft: '50px', paddingRight: '30px' }}>
                            <text is="x3d" style={{ width: '200px' }}>{book.nameOfBook}</text><br></br><br></br>
                            <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br>
                            <h6>Rs. {book.price}</h6>
                            <div style={{display:'flex', flexDirection:'row'}}>
                            <button style={{ marginLeft: '450px', backgroundColor: '#4863A0', color: 'white', width: '100px', height: '35px', fontWeight: 'bold' }}  onClick={() => this.handleChangeBookRemove(book.id)}>Remove</button>  
                            <button style={{ marginLeft: '20px', backgroundColor: '#4863A0', color: 'white', width: '100px', height: '35x', fontWeight: 'bold' }}onClick={() => this.handleClickAddToCart(book.id)}>Add to Cart</button>
                           
                           </div>
                        </div>
                    </div>
                ))}
                </div>
                
            </div>

<footer style={{ backgroundColor: '#660000', color: 'white', height: '60px', width: '1250px' , marginLeft:'60px', marginRight:'60px', marginTop:'10px',bottom:'0px',position:'fixed'}}>
<br></br>
<text style={{ marginLeft: '351px' }}>Copyright &#169; 2020, Bookstore Private Limited. All Rights Reserved</text>
</footer>
</div>
        );
    }

}

const mapStateToProps = (state) => ({
    wishListCount: state.wishListCount
});

export default connect(mapStateToProps) (WishList);




    
    

   