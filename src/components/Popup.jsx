import React from 'react'
import './Popup.css'
import CancelIcon from '@mui/icons-material/Cancel';
import { useContext } from 'react';
import { AllMenuContext } from '../Context/AllMenuContext';

function Popup({hidePopup,popupData,handleAddToCart}) {
  const resultVal = useContext(AllMenuContext)
  console.log('context value is ',resultVal);
  const nos=10
  const ingredients =[] 
  try{
    for(let i=1;i<10;i++){
      if(popupData["strIngredient"+i].length>0){
        ingredients.push(popupData["strIngredient"+i])
   
      }
    }

  }
  catch(err){
    console.log(err);
  }
 
  console.log(ingredients);
  return (
    <div className='popup'>
        <div className="popup-content">
          <div className="popup-header">
          <img src={popupData.strMealThumb} alt="" />
          <h5 className='popup-header-category'>{popupData.strCategory}</h5>
          </div>
        
            <h2>{popupData.strMeal}</h2>
            <p>{popupData.strInstructions}</p>
            <ul className='dish-ingredients'>
              {
                ingredients?.map((item)=>{
                  return(
                    <li >{item}</li>
                  )
                })
              
              }
               
            </ul>
            <button onClick={()=>handleAddToCart(popupData)} className='popup-button'>Order now</button>
            <CancelIcon onClick={hidePopup} className='popup-close fs-1' />

        </div>
        
      
    </div>
  )
}

export default Popup
