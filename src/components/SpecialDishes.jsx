import React from 'react'
import './SpecialDishes.css'
import { Card,Button } from 'react-bootstrap';

function SpecialDishes({specialMenu}) {
    console.log(specialMenu);

const maxSpecialDishes = 8
    let spclMenus=specialMenu.map((item,key)=>{
      if(key<maxSpecialDishes){
        return(
          <div>
          <Card className='border border-0 ' key={key} style={{ width: '200px', overflow:'hidden',height:'200px' }}>
         <Card.Img style={{height:'200px'}}  variant="top" src={item.strMealThumb} />
         {/* <Card.Body style={{height:'50px'}} className='text-center'>
           {item.strMeal}
          
         </Card.Body> */}
       </Card>
       <p style={{width:'200px'}} className='  text-center mt-2' >{item.strMeal}</p>
        </div>
  
        )
      }
    
    }
     
           
    )

  return (
    <section className='special-dishes'>
        <div className="container">
            <div className="special-dishes-content">
                <h2>Our Special Dishes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iusto vel deserunt? Deleniti, eaque incidunt.</p>
             
            </div>
            <div className="special-dishes-list">
<ul   >
    
{spclMenus}

    </ul>            
            </div>
        </div>
     
      
    </section>
  )
}

export default SpecialDishes
