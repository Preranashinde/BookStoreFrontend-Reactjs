import React, { Component } from "react";
import HomeDataLayer from '../DataLayer/HomeDataLayer';

var databook = new HomeDataLayer();
 class WishList extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }

    async componentDidMount() {
        await databook.fetchWishList(response => {
            this.setState({
                list: response
            })
        });
        console.log(this.state.list);
    }

    async handleChangeBookRemove(e) {
       await databook.removeFromWishList(101, e)
        await databook.fetchWishList(response => {
            console.log(response)
            this.setState({
                wishlistBooks: response
            })
        })
       // window.location.reload(true)
    }

    handleClickAddToCart = (e) => {
        databook.addToCart(101, e, 1)
        
        console.log("abcd", e)
    
    }
        

    render() {
        return (
            <div>
            <div style={{ marginLeft: '200px', marginRight: '200px', marginTop: '20px', marginBottom: '20px', outlineStyle: 'groove', outlineWidth: 'thin' }}>
                <h5 style={{ marginLeft: '30px' }}> My WishList ({this.state.list.length})</h5>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginRight: '10px' }}>
                    {this.state.list.map(book => (
                    <div style={{ marginLeft: '30px', marginTop: '20px', height: '160px', marginBottom: '30px', width: '95%', outlineColor: '#F8F8F8', outlineWidth: 'thin', borderBottom: 'groove', display: 'flex', flexDirection: 'row' }} key={book.id}>
                        <img style={{ width: '110px', height: '140px' }} src={book.image} alt="" />
                        <div style={{ marginLeft: '50px', paddingRight: '30px' }}>
                            <text is="x3d" style={{ width: '200px' }}>{book.title}</text><br></br><br></br>
                            <text is="x3d" style={{ opacity: '0.5' }}>by {book.author}</text><br></br>
                            <h6>Rs. {book.price}</h6>
                            <div style={{display:'flex', flexDirection:'row'}}>
                            <button style={{ marginLeft: '450px', backgroundColor: '#4863A0', color: 'white', width: '100px', height: '37px', fontWeight: 'bold' }}  onClick={() => this.handleChangeBookRemove(book.id)}>Remove</button>  
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

export default WishList;

