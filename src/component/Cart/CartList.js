import React, { useContext } from 'react'
import { productContext } from '../../Context'
import CartItem from './CartItem'

function CartList() {
  const {cart} = useContext(productContext)
  return (
    <div className="container-fluid">
      {
        cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
      }
    </div>
  )
}

export default CartList
