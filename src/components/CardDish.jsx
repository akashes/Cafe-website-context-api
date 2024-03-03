import React from 'react'
import { Card } from 'react-bootstrap'


function CardDish({item,key}) {

 
  return (

    <div className='spcl-d-list'>
              <Card   className='border border-0 ' key={key} style={{ width: '200px', overflow:'hidden',height:'200px' }}>
                 <Card.Img style={{height:'200px'}}  variant="top" src={item.strMealThumb} />
                 {/* <Card.Body style={{height:'50px'}} className='text-center'>
               {item.strMeal}
    
                 </Card.Body> */}
               </Card>
               <p style={{width:'200px'}} className='  text-center mt-2' > haha{item.strMeal}</p>
               
    
    </div>
  ) 
}

export default CardDish
