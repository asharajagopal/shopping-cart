import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context' ;

export class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
          {(value) =>{
              const {modalOpen, closeModal} = value;
              const{img, title, price} = value.modalProduct;

              if(!modalOpen){
                  return null;
              }
              else 
              return (<div className="modalContainer">
                <div className="container">
                    <div className="row">
                        <div id="modal" class="col=8 mx-auto col-md-6">
                            <h5>Item added to the cart</h5>
                            <img src={img} className="img-fluid"/>
                            <h5>{title}</h5>
                            <h5>Price : {price}</h5>
                            <Link to="/">
                            <button className="button-container-back " onClick={()=>{closeModal()}}>
                                Continue Shopping
                            </button>
                            </Link>
                            <Link to="/cart">
                            <button className="button-container-back" onClick={()=>{closeModal()}}>
                               Go to Cart
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
              </div>)
          }}
      </ProductConsumer>
    )
  }
}

export default Modal
