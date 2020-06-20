import React, { Component } from 'react';
import HomeDataLayer from '../DataLayer/HomeDataLayer'
//import Select from '@material-ui/core/Select';
//import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

var data = new HomeDataLayer();

class Home extends Component {
    constructor() {
        super()
        this.state = {
            books: []
           
        }
    }

    componentDidMount() {
        data.fetchAllBook(response => {
            console.log('MESSAGE',response)
            this.setState({
                books: response
            })
        })
    }

    handleClickAddToCart = (e) => {
        data.addToCart(101, e, 1)
        console.log("abcd", e)
    
    }

    handleClickAddToWishlist = (e) => {
        data.addToWishlist(101, e)
        console.log("abcdhjh", e)
    }

    handleChangeBookSorting = (e) => {
        if (e.target.value === "Price : High to Low")
            data.fetchAllBookDesc(response => {
                console.log(response)
                this.setState({
                    books: response.content
                })
            })
        else if (e.target.value === "Price : Low to High")
            data.fetchAllBookAsc(response => {
                console.log(response)
                this.setState({
                    books: response.content
                })
            })
        else
            data.fetchAllBook(response => {
                console.log(response)
                this.setState({
                    books: response
                })
            })
    }
    render() {
        let { books } = this.state
        //console.log('bookkkkss', books)
        return (

            <div className='outline'>


                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div >
                        <text is="x3d" style={{ marginLeft: '150px', fontSize: '25px' }}>Books <text is="x3d" style={{ fontSize: '20px', opacity: '0.5' }}>({books.length} items)</text></text>
                    </div>
                    <div  style={{ width: '30px', marginLeft: '700px' }} >



                        <TextField id="select" select style={{width:'180px',marginTop:'3px',border:'1px solid gray'}} onChange={this.handleChangeBookSorting} >
                        {/* <MenuItem value="Sorting">
                <em>Sort by relevance</em>
              </MenuItem> */}
                            <MenuItem value="Sort by relevance">Sort by relevance</MenuItem>
                            <MenuItem value="Price : High to Low">Price : High to Low</MenuItem>
                            <MenuItem value="Price : Low to High">Price : Low to High</MenuItem>
                            <MenuItem value="Newest Arrivals">Newest Arrivals</MenuItem>
                        </TextField>


                    </div>
                </div>


                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '90px', marginRight: '90px' }}>

                    {books.map(book => (
                        <div style={{ margin: '5px', padding: '1px' }}>
                            <div className="book-outline"  key={book.id}>
                            <div style={{ height: '220px', width: '250px', outlineStyle: 'groove', outlineColor: '#F5F5F5', outlineWidth: '0.1px', backgroundColor: '#F5F5F5' }}>
                                <img style={{ width: '130px', height: '180px', marginLeft: '40px', marginTop: '20px', marginBottom: '25px' }} src={book.image} alt="" />
                            </div>
                                
                                <div style={{ marginRight: '10px' }}>
                                    <text is="x3d" style={{ width: '100px', height: '0px' }}>{book.title}</text><br></br>
                                    <text style={{ opacity: '0.5', height: '0px', fontSize: '11px' }} > by {book.author}</text><br></br>
                                    <h9 style={{ height: '0px' }}>Rs. {book.price}</h9><br></br>
                                </div>
                                <div>

                                    <button style={{ backgroundColor: '#A52A2A', color: 'white', width: '110px' }} onClick={() => this.handleClickAddToCart(book.id)}>ADD TO BAG</button>
                                    <button style={{ marginLeft: '3.5px', width: '80px' }} onClick={() => this.handleClickAddToWishlist(book.id)}>WISHLIST</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

                <footer style={{ backgroundColor: '#660000', color: 'white', height: '60px', width: '1250px', marginTop: '10px', bottom: '0px', position: 'fixed' }}>
                    <br></br>
                    <text style={{ marginLeft: '351px' }}>Copyright &#169; 2020, Bookstore Private Limited. All Rights Reserved</text>
                </footer>
            </div>

        );
    }

}
export default Home





