import React, { Component } from 'react';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import SearchIcon from '@material-ui/icons/Search';

class NavigationBar extends Component {

    handleSearchText = async (e) => {
        await this.setState({
            searchText: e.target.value
        })
        console.log("searchText", this.state.searchText)
    }

    handleSearch = () => {
        console.log("searching", this.state.searchText)
        this.props.dispatch({ type: "searchUpdate", payload: this.state.searchText })
    }

    handleSignOut = () => {
        localStorage.removeItem("token");
    }

   
    render() {
    return (
        <div >
            <nav className="menu" >
                <div>
                    <MenuBookOutlinedIcon style={{ marginBottom: '20px', marginTop: '23px', marginLeft: '180px',color:'white' }} />
                </div>
                <div style={{ marginRight: '100px', marginTop: '3px',color:'white'}}>
                    <h3> Bookstore</h3>
                </div>

                <div >
                
                    <input style={{ marginTop: '18px', width: '300px', height: '25px', marginLeft: '5px',backgroundColor:'white',color:'gray' }} onChange={(e) => this.handleSearchText(e)} placeholder="Search..." />
                    <button onClick={() => this.handleSearch()} style={{ fontFamily: "fontawesome", width: '31px', height: '31px' }}>&#xf002;</button>
                   
                </div>

                <ul>
                    <div style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row',marginTop:'8px'}}>
                        <li><Link to="/Home" style={{ marginLeft: '50px', color: 'white' ,textDecoration:'none'}}>Home</Link></li>
                        <ShoppingCartIcon style={{marginLeft:'10px', color: 'white'}}/><Badge color="primary"  badgeContent={this.props.cartBookCount === this.props.cartCount ? this.props.cartBookCount : this.props.cartCount} showZero></Badge>
                       <li> <Link to="/Cart" style={{ color: 'white', marginLeft: '10px', marginBottom: '10px',textDecoration:'none' }}> Cart</Link> </li>
                       <FavoriteBorderIcon style={{marginLeft:'10px', color: 'white'}}/><Badge color="primary" badgeContent={this.props.wishBookCount === this.props.wishListCount ? this.props.wishBookCount : this.props.wishListCount } showZero></Badge> 
                        <li><Link to="/WishList" style={{ marginLeft: '10px', color: 'white',marginBottom:'20px',textDecoration:'none'}}> Wishlist</Link></li>
                        {localStorage.getItem("token") === null ? 
                        <li><Link to="/SignIn" style={{ marginLeft: '10px', color: 'white',marginBottom:'20px',textDecoration:'none'}} >LogIn</Link></li>
                        : <a href="/SignIn" style={{ marginLeft: '10px', color: 'white',marginBottom:'20px',textDecoration:'none'}} onClick={this.handleSignOut}>LogOut </a> }
                    </div>

                </ul>
            </nav>
            
 </div>
    );
}
}

const mapStateToProps = (state) => ({
    cartCount: state.cartCount,
    wishListCount: state.wishListCount,
    searchText: state.searchText
});

export default connect(mapStateToProps) (NavigationBar);




