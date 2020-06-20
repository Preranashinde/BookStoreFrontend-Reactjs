import React from 'react';
import celebration from '../Assets/celebration.jpeg';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function OrderConfirm() {
    return(
        <div>
        <div>
        <img src={celebration} alt="" style={{ width:'750px', height:'200px',marginTop:'20px', marginLeft:'300px' }}></img>
       </div>
        <div style={{marginBottom: '739px', marginLeft: '60px',marginRight:'60px'}}>
            <h4 style={{textAlign: 'center', marginTop: '50px', fontSize: '35px'}}>Order Placed Successfully</h4>
            <p style={{justifyContent: 'center', textAlign: 'center', fontSize: '20px'}}>Hurray!!! your order is confirmed <br/> the order id is #123456 save the order id for <br/> further communication.. </p>
            <table style={{width:'50%',border:'1px groove grey',marginLeft:'300px'}}>
        <tr>
            <th>Email us</th>
            <th>Contact us</th>
            <th>Address</th>
        </tr>
        <tr>
            <td style={{border:'1px groove grey'}}>abcd@gmail.com</td>
            <td style={{border:'1px groove grey'}}>1234567891</td>
            <td style={{border:'1px groove grey'}}>Nashik</td>
        </tr>
        </table>

        <Link to="/" >
                <Button style={{ backgroundColor: '#0073cf', color: 'white', marginLeft: '500px', marginTop: '50px' }}>CONTINUE SHOPPING</Button>
            </Link>
        </div>
       
        </div>
    );
}