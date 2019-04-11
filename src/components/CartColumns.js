import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center">
        <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                <p className="cart-heading"> Products</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="cart-heading">Name of the Product</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="cart-heading">Price</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="cart-heading">Qunatity</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="cart-heading">Delete</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="cart-heading">Total</p>
            </div>
        </div>
      
    </div>
  )
}
