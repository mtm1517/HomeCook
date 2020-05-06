import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ShoppingCart from './../components/ShoppingCart';
import * as Message from './../constants/Message';
import ShoppingCartDetail from './../components/ShoppingCartDetail';
import Total from './../components/Total';
import {actDeleteProductInCart, actUpdateProductInCart} from './../action/index';


class CartContainer extends Component {
  render() {
    var {cart} = this.props;
    console.log(cart);
    return (
        <ShoppingCart>
            {this.showCartItem(cart)}
            {this.showTotaAmount(cart)}
        </ShoppingCart>
    );
  }

  showCartItem = (cart) => {
      var result = Message.MSG_SHOPPINGCART_EMPY;
      var { onDeleteProductInCart} =this.props;
      var {onUpdateProductInCart} = this.props;
      if (cart.length>0)
      {
          result = cart.map((item,index) => {
            return(
                <ShoppingCartDetail 
                    key = {item.product.id} 
                    item = {item} 
                    onDeleteProductInCart = {onDeleteProductInCart}
                    onUpdateProductInCart = {onUpdateProductInCart}
                />
            );
          });
      }
      return result;
  }

  showTotaAmount = (cart) => {
      var result = null;
      if (cart.length >0){
          result = <Total cart = {cart}/>
      }
      return result;
  }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product : PropTypes.shape(
                {
                    id: PropTypes.number.isRequired,
                    name: PropTypes.string.isRequired,
                    price: PropTypes.number.isRequired
                }
            ).isRequired,
            quantity : PropTypes.number.isRequired
        })).isRequired
}

const mapStateToProps = state =>{
    return{
        cart : state.cart
    }
}

const mapDispatchToProps= (dispatch, props) => {
    return{
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product))
        },
        onUpdateProductInCart: (product,quantity) => {
            dispatch(actUpdateProductInCart(product,quantity))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
