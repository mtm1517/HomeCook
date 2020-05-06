import React, { Component } from 'react';




class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form className="form-group">
        <div class="form-group">
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

}

export default Login;
