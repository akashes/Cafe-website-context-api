import React, { useState } from 'react'
import './SpecialDishes.css'
import { Card,Button } from 'react-bootstrap';
import CardDish from './CardDish';
import Popup from './Popup';
import { useContext } from 'react';
import { MenuContext } from './Menus';

function SpecialDishes() {

  const menu =useContext(MenuContext)
  console.log(menu);

  const[showPopup,setShowPopup]=useState(false)
  const[popupData,setPopupData]=useState({})


    const handleShowPopup=(item)=>{
      setPopupData(item)

      setShowPopup(true)
    }
    const hidePopupHandler=()=>{
      setShowPopup(false)
    }

const maxSpecialDishes = 8
    let spclMenus=menu.map((item,key)=>{
      if(key<maxSpecialDishes){
        return(
          // <CardDish item={item} key={key} />
          <div>
          <Card onClick={()=>handleShowPopup(item)} className='border border-0 ' key={key} style={{ width: '200px', overflow:'hidden',height:'200px' }}>
         <Card.Img style={{height:'200px'}}  variant="top" src={item.strMealThumb} />
         {/* <Card.Body style={{height:'50px'}} className='text-center'>
           {item.strMeal}
          
         </Card.Body> */}
       </Card>
       <p style={{width:'200px'}} className='  text-center mt-2' >{item.strMeal}</p>
       {/* <h5 className="popup-close"onClick={hidePopupHandler} >Close</h5> */}
        </div>
  
        )
      }
    
    }
     
           
    )

  return (
   <>{
    showPopup && <Popup popupData={popupData} hidePopup={hidePopupHandler} />
   }
    <section className='special-dishes'>
        <div className="container">
            <div className="special-dishes-content">
                <h2 className='fw-bold'>Our Special Dishes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iusto vel deserunt? Deleniti, eaque incidunt.</p>
             
            </div>
            <div className="special-dishes-list">
<ul   >
    
{spclMenus}

    </ul>            
            </div>
        </div>
     
      
    </section>
   </>
  )
}

export default SpecialDishes
