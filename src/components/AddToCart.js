import React, { useContext } from 'react'
import './AddToCart.css'
import { StateContext } from '../Context/AppProvider';

function AddToCart({addToCartItem}) {
 const cartData =  useContext(StateContext)
 console.log('cartdata heere is ',cartData.cartItems);


  


  return (
    <div className='add-to-cart-wrapper scrollbar-style'>

    {
      cartData.cartItems.map((ele)=>{
        return(
          <div className="add-to-cart-item">
          <img  src={ele.img} alt="" />
          <h6>{ele.title}</h6>

      </div>

        )
      })
    }
      
          
      
    


</div>



  )
  

    
  }


export default AddToCart
