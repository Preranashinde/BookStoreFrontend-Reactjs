import React from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
// import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom';

function NavigationBar(props) {
    console.log(props);
    return (
        <div>
            <nav className="menu">
                <div>
                    <MenuBookOutlinedIcon style={{ marginBottom: '20px', marginTop: '20px', marginLeft: '180px' }} />
                </div>
                <div style={{ marginRight: '100px', marginTop: '10px' }}>
                    <h6> Bookstore</h6>
                </div>

                <div className=".input[type=text],input[type=password]">

                    <input style={{ marginTop: '10px', width: '250px', height: '20px', marginLeft: '5px' }} placeholder="Search..."></input>
                </div>

                <ul>
                    <div>
                        <li><Link to="/" style={{ marginLeft: '200px', color: 'white' }}>Home</Link></li>
                        <li> <Link to="/Cart" style={{ color: 'white', marginLeft: '20px', marginBottom: '20px' }}>Cart</Link></li>
                        <ShoppingCartOutlinedIcon style={{ marginTop: '20px', marginRight: '35px' }} />
                    </div>

                </ul>
            </nav>
            
 </div>
    );
}



export default NavigationBar
