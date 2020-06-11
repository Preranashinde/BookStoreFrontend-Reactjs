import React, { Component } from 'react';
import HomeDataLayer from '../DataLayer/HomeDataLayer'

var data = new HomeDataLayer();
class Home extends Component {
    constructor() {
        super()
        this.state = {
            books: []
        }
    }


    async componentDidMount() {
        await data.fetchAllBook(response => {
            console.log('bookss', response)
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



                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginLeft: '90px', marginRight: '90px' }}>
                
                    {books.map(book => (
                        <div  style={{ margin: '5px', padding: '5px' }}>
                        <div className="book-outline">
                            <img style={{ width: '145pxpx', height: '180px', justifySelf:'centre' }} src={book.image} alt="" /><br></br>
                            <text is="x3d"style={{ width: '200px' , height:'0px'}}>{book.bookTitle}</text><br></br>
                            <text style={{ opacity: '0.5', height:'0px',fontSize:'11px' }} > by {book.authorName}</text><br></br>
                            <h9 style={{height:'0px'}}>Rs. {book.price}</h9><br></br>
                            <div>

                            <button style={{ backgroundColor: '#A52A2A', color: 'white', width: '110px' }}>ADD TO BAG</button>
                            <button style={{ marginLeft: '3.5px', width: '80px' }}>WISHLIST</button>
                            </div>
                           </div>
                        </div>
                    
                    ))}
                </div>
                
                <footer style={{ backgroundColor: '#660000', color: 'white', height: '60px', width: '1250px' }}>
                    <br></br>
                    <text style={{ marginLeft: '351px' }}>Copyright &#169; 2020, Bookstore Private Limited. All Rights Reserved</text>
                </footer>
            </div>
           
        );
    }

}
export default Home





