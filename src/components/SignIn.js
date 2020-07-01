// import React, { Component } from "react";
// //import { Button } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import Avatar from '@material-ui/core/Avatar';
// import HomeDataLayer from '../DataLayer/HomeDataLayer';

// var data = new HomeDataLayer();

// export default class SignIn extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       username: '',
//       password: ''
//     }
//   }

//   handleChangeUserName = (e) => {
//      this.setState({
//       username: e.target.value
//     })
//   }

//   handleChangePassword = (e) => {
//     this.setState({
//       password: e.target.value
//     })
//   }
//   handleSignInOfUser = () => {
//     data.signInData(this.state.username, this.state.password)
//     console.log(localStorage.getItem("token"))
//   }
 

//   render() {
//   return (
//     <div className="Login">
//       <Avatar src="/broken-image.jpg" style={{marginLeft:'630px'}}/>
//       <h4 style={{marginLeft:'600px'}}>SignIn</h4>
//       <div>
//       <input style={{padding:'10px', margin:'5px'}} placeholder="Username" onChange={(e)=> this.handleChangeUserName(e)}></input>
//         <input placeholder="Password" onChange={(e) => this.handleChangePassword(e)}></input>
//         </div>
//         <div>
//         <Link to="/Home">
//                   <button className="FormField__Button mr-20" onClick={this.handleSignInOfUser}>Sign In</button> 
//                   </Link>
//         {/* <Link to="/Home" >
//         <Button block bsSize="large"  type="submit">
//           SignIn
//         </Button>
//         </Link> */}
//         <a href="/ForgetPassword">forgot password?</a><br></br>
// </div>
        
     
//     </div>
//   );
// }
// }

import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HomeDataLayer from '../DataLayer/HomeDataLayer';

var data = new HomeDataLayer();

export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleChangeLogin = () => {
        data.signInData(this.state.username, this.state.password)
        console.log(localStorage.getItem("token"))
    }

    render() {
        return (
            <div className="login-box">
                <h2>Welcome to BookStore</h2>
                <div style={{ padding: "10px", display: "flex", flexDirection: "column" }}>
                    <input style={{ padding: "10px", margin: "5px" }} placeholder="Username" onChange={(e) => this.handleChangeUsername(e)}></input>
                    <input style={{ padding: "10px", margin: "5px" }} placeholder="Password" type="password" onChange={(e) => this.handleChangePassword(e)}></input>
                </div>
                <div>
                    <Link to="/Home" >
                        <button className="button" onClick={this.handleChangeLogin}>Login</button>
                    </Link>
                </div>
                <div style={{ padding: "10px", margin:"5px", display: "flex", flexDirection: "column", fontSize:"20px", justifyContent:"center", alignItems:"center" }}>
                     <a style={{color:"black", textDecoration:"none",  padding: "5px"}} href="/SignUpForm">Create account instead!</a>
                     <a style={{color:"black", textDecoration:"none"}} href="/ForgetPassword">Forgot password?</a> 
                </div>
            </div>
        )
    }
}

export default SignIn;