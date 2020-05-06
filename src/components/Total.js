import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Total extends Component {
  render() {
    var {cart} = this.props;
    return (
      <tr>
        <td colSpan="3"></td>
        <td>
          <h4>
            <strong>Total Amount</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>${this.showTotalAmount(cart)}</strong>
          </h4>
        </td>
        <td colSpan="3">
          <Link to = "/payment" className="btn btn-primary waves-effect waves-light">Complete purchase
             <i className="fa fa-angle-right right"></i>
          </Link>
        </td>
      </tr>
    );
  }

  showTotalAmount = (cart) => {
    var total = 0;
    if(cart.length>0){
      for (var i = 0; i <cart.length; i++)
      {
        total += cart[i].product.price * cart[i].quantity;
      }
    }
    return total;
  }


}

export default Total;
