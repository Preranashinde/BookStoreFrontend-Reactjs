import React from 'react'
//import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';


function NavigationBar(props) {
    console.log(props);
    return (
        <div >
            <nav className="menu" >
                <div>
                    <MenuBookOutlinedIcon style={{ marginBottom: '20px', marginTop: '20px', marginLeft: '180px' }} />
                </div>
                <div style={{ marginRight: '100px', marginTop: '10px' }}>
                    <h6> Bookstore</h6>
                </div>

                <div >

                    <textarea style={{ marginTop: '15px', width: '300px', height: '25px', marginLeft: '5px',backgroundColor:'white',color:'gray' }} placeholder="Search..."></textarea>
                </div>

                <ul>
                    <div>
                        <li><Link to="/" style={{ marginLeft: '160px', color: 'white' }}>Home</Link></li>
                       <li> <Link to="/Cart" style={{ color: 'white', marginRight: '15px', marginBottom: '20px' }}> <Badge color="primary" badgeContent={3} showZero></Badge> &#xf218; Cart</Link> </li>
                        <li><Link to="/WishList" style={{ marginLeft: '5px', color: 'white',marginBottom:'20px' }}> <Badge color="primary" badgeContent={4} showZero></Badge> &#xf004; Wishlist</Link></li>
                      
                        
                       
                    </div>

                </ul>
            </nav>
            
 </div>
    );
}



export default NavigationBar



