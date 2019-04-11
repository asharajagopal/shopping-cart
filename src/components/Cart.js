import React, { Component } from 'react'
// import Title from './Title';
// import CartColumns from  './CartColumns';
// import CartList from './CartList';
import {ProductConsumer} from '../Context' ;
export class Cart extends Component {
  render() {
    return (
      // <section>
      //   <ProductConsumer>
      //     {value =>{const {cart} = value;
      //     if (cart.length > 0){
      //       return(
      //         <div>jsjsj</div>
      //       );}
      //       else{
      //         return (
      //           <div>sjdsjdjs</div>
      //         )
      //       }
      //     }

      //   }}
        
      //   </ProductConsumer>
      // </section>
      <ProductConsumer>
        {value =>{const {cart} = value;
          if (cart.length > 0){
            return(
              <div>Items added in the cart</div>
                );
          }
          else {
            return(
              <div>Cart is empty</div>
               );
          }
      }}

      </ProductConsumer>
     
    )
  }
}

export default Cart
