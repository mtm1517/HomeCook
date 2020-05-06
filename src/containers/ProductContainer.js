import React, { Component } from 'react';
import {connect} from 'react-redux';
import Products from './../components/Products';
import Item from './../components/Item';
import { actAddToCart } from './../action/index';
import PropTypes from 'prop-types';

//{this.showProducts(products)} is showItem

class ProductContainer extends Component {
  render() {
    var {products}= this.props;
    return (
        <Products>{this.showProducts(products)}</Products>
    );
  }

  showProducts(products){
    var result = null;
    var {onAddToCart} = this.props;
    if(products.length>0)
    {
      result = products.map((product,index)=> {
        return <Item key = {product.id} product = {product} onAddToCart = {onAddToCart}
        /> 
      });
    }
    return result;
  }
}

ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state =>{
  return{
    products: state.products
  }
}

const mapDispatchToProps = (dispatch, props) => {
    return{
      onAddToCart: (product) => {
        dispatch(actAddToCart(product,1));
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
