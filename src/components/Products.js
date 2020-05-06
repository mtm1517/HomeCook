import React, { Component } from 'react';



//{this.showProducts(products)} is showItem

class Products extends Component {
  render() {
    return (
      <section className="section">
        <div className="row">
          {this.props.children}
        </div>
      </section>
    );
  }
}



export default Products;
