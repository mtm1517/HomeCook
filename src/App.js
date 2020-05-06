import React, { Component } from 'react';

import './App.css';
import Header from'./components/Header';
import Footer from'./components/Footer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from'./components/Login';
import Payment from'./components/Payment';
import Message from './components/Message';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Header/> 
            <div className="App-header">HomeCook</div>
            <main id="mainContainer">
              <div className="container">
                <Route path="/" exact component={ProductContainer}/>
                <Route path="/product" component={ProductContainer}/>
                <Route path="/login" component={Login}></Route> 
                <Route path="/shoppingcart" component={CartContainer}/>
                <Route path="/payment" component = {Payment}/>
                <Route path="/message" component = {Message}/>
              </div>
            </main>
            <Footer/>
            
          </div>
        </div>
      </Router>
    );
  }

}

export default App;