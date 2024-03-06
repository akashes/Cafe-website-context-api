import React, { useContext } from 'react'
import './AddToCart.css'
import { StateContext } from '../Context/AppProvider';

function AddToCart({addToCartItem}) {
 const cartData =  useContext(StateContext)
 console.log(cartData);


  


  return (
                <div className='add-to-cart-wrapper scrollbar-style'>
      
            <div className="add-to-cart-item">
                <img  src={cartData.cartItems[0]} alt="" />
                <h6>{cartData.cartItems[1]}</h6>
    
            </div>
      
    


</div>



  )
  

    
  }


export default AddToCart
