import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import WishList from './components/WishList';
import OrderConfirm from './components/OrderConfirm';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
//import HomeDataLayer from './DataLayer/HomeDataLayer';
import Cart from './components/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
  return (
    <div className="App">
     
    <BrowserRouter>
       <div style={{ position:'sticky', top:0}}>
    <NavigationBar />
    </div>
       <Switch> 
       <Route exact path="/" component={Home} />
       <Route path="/Cart" component={Cart} />
       <Route path="/WishList" component={WishList} />
       <Route path="/OrderConfirm" component={OrderConfirm} /> 
      <Route path="/SignIn" component={SignIn}/>
      <Route path="/SignUp" component={SignUp}/>

      </Switch> 
      </BrowserRouter> 
    </div>
  );
}
}

export default App;
