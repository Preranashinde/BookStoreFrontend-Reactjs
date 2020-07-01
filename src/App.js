import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import WishList from './components/WishList';
import OrderConfirm from './components/OrderConfirm';
import SignIn from './components/SignIn'
import ResetPassword from './components/ResetPassword'
import Search from './components/Search'
import SignUpForm from './components/SignUpForm'
import ForgetPassword from './components/ForgetPassword'
//import HomeDataLayer from './DataLayer/HomeDataLayer';
import Cart from './components/Cart';
import Pagination from './components/Pagination'
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
       <Route exact path="/SignUpForm" component={SignUpForm} />
       <Route path="/Home" component={Home}/>
       <Route path="/Cart" component={Cart} />
       <Route path="/WishList" component={WishList} />
       <Route path="/OrderConfirm" component={OrderConfirm} /> 
      <Route path="/SignIn" component={SignIn}/>
      <Route path="/ForgetPassword" component={ForgetPassword}/>
    <Route path="/ResetPassword" component={ResetPassword}/>
      <Route path="Search" component={Search}/>
<Route path="Pagination" component={Pagination}/>
      </Switch> 
      </BrowserRouter> 
    </div>
  );
}
}

export default App;
