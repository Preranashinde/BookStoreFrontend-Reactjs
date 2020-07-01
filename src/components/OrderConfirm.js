import React from 'react';
import { Button, Box } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import celebration from '../Assets/celebration.jpeg';
import HomeDataLayer from '../DataLayer/HomeDataLayer';

var data = new HomeDataLayer();

export default class OrderConfirm extends React.Component {
    constructor() {
        super();
        this.state = {
            orderId: ''
        }
    }

    componentDidMount() {
        data.getOrderId(response => {
            console.log("id: ", response)
            this.setState({
                orderId: response
            })
        })
    }

    render() {
        return (
            localStorage.getItem("token") != null ?
            <div style={{ marginBottom: '44.3px', marginLeft: '300px', marginTop: '50px' }}>
                <img src={celebration} alt="" style={{ marginLeft: '200px' }}></img>
                <p style={{ justifyContent: 'center', textAlign: 'center', fontSize: '25px', marginRight:'270px' }}>
                    Hurray!!! your order is confirmed <br />
                the order id is #{this.state.orderId} save the order id for <br />
                further communication..
            </p>
                <Box style={{ outline: 'groove', width: '900px', height: '50px', outlineWidth: '0.5px', marginTop: '60px' }}>
                    <br />
                    <text style={{ marginLeft: '90px' }}>Email us</text>
                    <text style={{ marginLeft: '230px' }}>Contact us</text>
                    <text style={{ marginLeft: '230px' }}>Address</text>
                </Box>
                <div style={{ display: 'flex', flexDirection: 'row', fontSize: '14px' }}>
                    <Box style={{ outline: 'groove', width: '290px', height: '85px', outlineWidth: '0.5px' }}>
                        <br />
                        <text style={{ marginLeft: '50px' }}>admin@bookstore.com</text>
                    </Box>
                    <Box style={{ outline: 'groove', width: '290px', height: '85px', outlineWidth: '0.5px' }}>
                        <br />
                        <text style={{ marginLeft: '85px' }}>+91 9021198412</text>
                    </Box>
                    <Box style={{ outline: 'groove', width: '320px', height: '85px', outlineWidth: '0.5px' }}>
                        <br />
                        <div style={{ marginLeft: '13px' }}>
                            <text>Flat no.B-7, Narmada Society, NashikRoad-422101</text>
                        </div>
                    </Box>
                </div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button style={{ backgroundColor: '#0073cf', color: 'white', marginLeft: '335px', marginTop: '50px' }}>CONTINUE SHOPPING</Button>
                </Link>
            </div>
            :  <Redirect to='/SignIn' />
        );
    }
}