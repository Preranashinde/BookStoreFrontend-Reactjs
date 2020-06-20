import React from "react";
//import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


export default function SignIn() {
  return (
    
      <div className="Login">
        <Avatar src="/broken-image.jpg" style={{marginLeft:'660px'}}/>
          <h4 style={{marginLeft:'630px'}}>SignUp</h4>
      <div id="signup" style={{marginLeft:'500px',marginRight:'500px'}}>
                        <textarea type="text" id="first" placeholder="First Name"/>
                        <textarea type="text" id="last" placeholder="Last Name"/>
                        <textarea type="email" id="email" placeholder="Email"/>
                    <textarea type="password" id="password" placeholder="Password"/>
                    <textarea type="password" id="confirm" placeholder="Confirm Password"/>
                    <Link to="/SignIn" >
                    <Button block bsSize="large"  type="submit">
          SignUp
        </Button>
        </Link>
            </div>
    </div>
  );
}