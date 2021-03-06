import React, { Component } from 'react';


class Item extends Component {
  render() {
    var {product} = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} />
              <div className="mask waves-light waves-effect waves-light"></div>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                {product.name}
              </strong>
            </h4>
            <ul className="rating">
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
            </ul>
            <p className="card-text">
              {product.description}
                                    </p>
            <div className="card-footer">
              <strong className="left card-title">${product.price}</strong>
              <span className="right">
                <a 
                  className="btn-floating blue-gradient" 
                  data-toggle="tooltip" 
                  data-placement="top" 
                  title="" 
                  data-original-title="Add to Cart"
                  onClick = {() => this.onAddToCart(product)}
                  >
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }


  onAddToCart = (product) => {
    this.props.onAddToCart(product);
  }
}

export default Item;
