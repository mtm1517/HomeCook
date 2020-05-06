import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Payment extends Component {
  render() {
    return (
      <div>
        <h1 >Payment</h1>
        
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        </div>
        <Link to ="/message" class="btn btn-primary">Payment</Link>
        
      </div>
    );
  }

}

export default Payment;
