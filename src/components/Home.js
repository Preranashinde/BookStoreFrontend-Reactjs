import React, { Component } from 'react';
import HomeDataLayer from '../DataLayer/HomeDataLayer'
import { connect } from 'react-redux';
import Pagination from './Pagination'

var data = new HomeDataLayer();

class Home extends Component {
    constructor() {
        super()
        this.state = {
            books: [],
            pageOfItems: [],
            cartCount: 0,
            wishCount: 0

        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    async componentDidMount() {
        await data.fetchAllBook(response => {
            this.setState({
                books: response
            })
        });
        await data.fetchAllCartBook(response => {
            this.props.dispatch({ type: "methodCalled", payload: response.length })
        })
        await data.fetchAllWishlistBook(response => {
            this.props.dispatch({ type: "wishListUpdate", payload: response.length })
        })
    }

    handleClickAddToCart = async (e) => {
        await data.addToCart(e, 1)
        await data.fetchAllCartBook(response => {
            this.props.dispatch({ type: "methodCalled", payload: response.length })
        })
    }

    handleClickAddToWishlist = async (e) => {
        await data.addToWishlist(e)
        await data.fetchAllWishlistBook(response => {
            this.props.dispatch({ type: "wishListUpdate", payload: response.length })
        })
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

    handleSearchtext = async () => {
        await data.fetchAllSearchBook(this.props.searchText, response => {
            this.setState({
                books: response
            })
        });
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }


    render() {
        if (this.props.searchText !== undefined) {
            this.handleSearchtext()
        }
        return (

            <div className='outline'>


                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div >
                        <text is="x3d" style={{ marginLeft: '150px', fontSize: '25px' }}>Books </text>
                    </div>
                    <div style={{ width: '40px', marginLeft: '700px' }} >


                        <select onChange={this.handleChangeBookSorting} >
                            <option>Sort by relevance</option>
                            <option >Price : High to Low</option>
                            <option>Price : Low to High</option>
                            <option>Newest Arrivals</option>
                        </select>


                    </div>
                </div>


                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '150px', marginRight: '80px' }}>

                    {this.state.pageOfItems.map(book => (
                        <div style={{ margin: '10px', padding: '2px', width: '210px', flexWrap: 'wrap', display: 'flex' }}>
                            <div className="book-outline" key={book.id}>
                                <div style={{ height: '200px', width: '210px', outlineStyle: 'groove', outlineColor: '#F5F5F5', outlineWidth: '0.1px', backgroundColor: '#F5F5F5' }}>
                                    <img style={{ height: '150px', width: '130px', marginLeft: '30px', marginTop: '20px', marginBottom: '25px', display: 'flex', flexWrap: 'wrap' }} src={book.picPath} alt="" />
                                </div>

                                <div >
                                    <text is="x3d" style={{ width: '200px', height: '0px' }}>{book.nameOfBook}</text><br></br>
                                    <text style={{ opacity: '0.5', height: '0px', fontSize: '11px' }} > by {book.author}</text><br></br>
                                    <h9 style={{ height: '0px' }}>Rs. {book.price}</h9><br></br>
                                </div>
                                <div style={{display:'flex', flexWrap:'wrap'}}>

                                    <button style={{ backgroundColor: '#A52A2A', color: 'white', width: '110px' }} onClick={() => this.handleClickAddToCart(book.id)}>ADD TO BAG</button>
                                    <button style={{ marginLeft: '3.5px', width: '80px' }} onClick={() => this.handleClickAddToWishlist(book.id)}>WISHLIST</button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                <div>
                    <Pagination items={this.state.books} onChangePage={this.onChangePage} />
                </div>


            </div>

        );
    }

}
const mapStateToProps = (state) => ({
    cartCount: state.cartCount,
    wishListCount: state.wishListCount,
    searchText: state.searchText
});

export default connect(mapStateToProps)(Home);





