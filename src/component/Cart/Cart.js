import React, { useContext } from 'react'
import CartColumn from './CartColumn'
import EmptyCart from './EmptyCart'
import ComponentTitle from '../ComponentTitle'
import { productContext } from '../../Context'
import CartList from './CartList'
import CartCheckout from './CartCheckout'

function Cart() {
  const {cart, } = useContext(productContext)
  if(cart.length > 0){
    return (
      <div>
        <ComponentTitle name="Your Cart List"/>
        <CartColumn />
        <CartList />
        <CartCheckout />
      </div>
    )
  } else {
    return <EmptyCart />
  }
}

export default Cart
