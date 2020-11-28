import React, { useContext } from 'react'
import { productContext } from '../../Context'
import {Link} from 'react-router-dom'

function CartCheckout() {
  const {cartSubTotal, cartTax, cartTotal, clearCart} = useContext(productContext)
  return (
    <div className="container ">
     <div className="row">
       <div className="col-10 mt-3 ml-sm-5 ml-md-auto col-sm-8 text-right">
      <Link to="/">
      <button className="btn btn-outline-danger my-3 px-5" onClick={()=>clearCart()}>Clear Cart</button>
      </Link>
      <h3>
        SubTotal : <span>${cartSubTotal}</span>
      </h3>
      <h3>
        Tax : <span>${cartTax}</span>
      </h3>
      <h3>
        Total : <span>${cartTotal}</span>
      </h3>
       </div>
     </div>
    </div>
  )
}

export default CartCheckout
