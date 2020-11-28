import React from 'react'

function CartColumn() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <h5>Product</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5>Product name</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5>Price</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5>Quantity</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5>Remove</h5>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <h5>Total</h5>
        </div>
      </div>
      
    </div>
  )
}

export default CartColumn
