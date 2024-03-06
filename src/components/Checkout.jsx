import React, { useContext } from 'react'
import { StateContext } from '../Context/AppProvider'

function Checkout() {
  const cartData=  useContext(StateContext)
  console.log(cartData);
  return (
    <div>
        <h2>Checkout Page</h2>
        <div>
        <img  src={cartData.cartItems[0]} alt="" />
                <h6>{cartData.cartItems[1]}</h6>
        </div>
     
    </div>
  )
}

export default Checkout
