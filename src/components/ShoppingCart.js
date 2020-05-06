import React, { Component } from 'react';



class ShoppingCart extends Component {
  render() {
    var {children} = this.props;
    return (
      <section className="section">
        <div className="table-responsive">
          <h1 >Shopping Cart</h1>
          <table className="table product-table">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Number</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {children}
              
            </tbody>
          </table>
        </div>
      </section>
    );
  }

}

export default ShoppingCart;
