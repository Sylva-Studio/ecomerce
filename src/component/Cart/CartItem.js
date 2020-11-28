import React, { useContext } from 'react'
import { productContext } from '../../Context'

function CartItem({cartItem}) {
  const {id, name, price, image, total, count} = cartItem
  const {removeItem, inCrement, decrement} = useContext(productContext)
  return (
    <div className="row text-center my-1">
      <div className="col-10 mx-auto col-lg-2">
        <img src={image} style={{width:'5em', height:'5em'}} alt=""/>
      </div>
      <div className="col-10 mx-auto col-lg-2">
      <h6><span className="d-lg-none">Product : </span>{name}</h6>
      </div>
      <div className="col-10 mx-auto col-lg-2">
      <h6><span className="d-lg-none">Price : </span><strong>${price}</strong></h6>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <h6>
          <span className="btn btn-cart" onClick={()=> decrement(id)}>-</span>
         <span className=" btn btn-cart">{count}</span>
          <span className="btn btn-cart" onClick={()=> inCrement(id)}>+</span>
        </h6>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <h6 onClick={()=> removeItem(id)}><span className="d-lg-none">Remove : </span>Remove</h6>
      </div>
      <div className="col-10 mx-auto col-lg-2">
      <h6><span className="d-lg-none">Total : </span>${total}</h6>
      </div>
    </div>
  )
}

export default CartItem
