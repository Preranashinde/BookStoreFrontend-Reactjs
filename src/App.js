import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
//import HomeDataLayer from './DataLayer/HomeDataLayer';
import Cart from './components/Cart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


class App extends Component {
  render() {
  return (
    <div className="App">
    <BrowserRouter>
       <NavigationBar />
       
       <Switch> 
       <Route exact path="/" component={Home} />
       <Route path="/Cart" component={Cart} />
      

      </Switch> 
      </BrowserRouter> 
    </div>
  );
}
}

export default App;
