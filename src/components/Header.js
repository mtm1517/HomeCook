import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';




class Header extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink to = '/' className="navbar-brand">HomeCook</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink to ="/product" className="nav-item nav-link">Product</NavLink>
                  <NavLink to ="/shoppingcart" className="nav-item nav-link">ShoppingCart</NavLink>
                  <NavLink to ="/login" className="nav-item nav-link">Login</NavLink>
                </div>
                <form className="form-inline my-2 my-lg-0" >
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
           </nav>
        </div>
    );
  }

}

export default Header;
