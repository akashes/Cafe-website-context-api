import React, { useEffect, useState } from 'react'
import './FilteredDishes.css'
import { Card } from 'react-bootstrap'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Pagination from './Pagination';

function FilteredDishes({categoryData,allMenus,singleDish}) {
    const[filteredDishesCategory,setFilteredDishesCategory]=useState([])
    const[showEmptyDishesStatus,setShowEmptyDishesStatus]=useState(false)
    const[hideDefaultDishes,setHideDefaultDishes]=useState(false)
    const[showActive,setShowActive]=useState("beef")

    const[currentPage,setCurrentPage]=useState(1)
    const[itemsPerPage,setItemsPerPage]=useState(4)

    console.log(currentPage);

    let indexOfLastDish = currentPage * itemsPerPage
    //1 x 4 = 4
    //2 x 4 =8
    //3 x 4 = 12

    let indexOfFirstDish = indexOfLastDish - itemsPerPage
    //4 - 4 = 0
    //8 - 4 =4
    //12 - 4 = 8

    let showPaginationDishes= filteredDishesCategory.slice(indexOfFirstDish,indexOfLastDish)


     const singleDishData =    singleDish.map((item,key)=>
     {

     
        if(key<4){
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
       


})
    

    const showSpecialDishes=(e)=>{
        console.log(e.target.innerText);
     const result =    allMenus.filter((item)=>item.strCategory===e.target.innerText)
     if(result){
        console.log({"result is ": result});
        setHideDefaultDishes(true)
        setShowActive(e.target.innerText)
        setFilteredDishesCategory(result)
        setShowEmptyDishesStatus(false)


     }
     if(result.length==0){
        setShowEmptyDishesStatus(true)

     }

    }
 
    
  return (
  <>
    <div className='filtered-dishes'>
        <div className="container">
            <h2>Choose Your Dishes</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, natus. Atque unde temporibus alias, facere quisquam praesentium harum dolor laudantium?</p>
        </div>
        <div className="filtered-dishes">
            <ul>
                {
                    categoryData.map((item,key)=>{
                        console.log(item.strCategory);
                        return(
                            <div>
                                {/* {
                                    item.strCategory === showActive ? <li className='active' id={showActive} onClick={showSpecialDishes} >{item.strCategory}</li> :  <li id={item.strCategory} onClick={showSpecialDishes} >{item.strCategory}</li>
                                } */}
                                {
                                    <li  className={item.strCategory===showActive ?"active":""} id={showActive} onClick={showSpecialDishes} >{item.strCategory}</li>
                                }
                                                           

                            </div>
                        )
                    })
                }
            </ul>
        </div>
        <div className="filtered-dishes-results">
            <ul>{ !hideDefaultDishes &&
                singleDishData
                }

                {
                    showPaginationDishes.length>0 ? showPaginationDishes.map((item,key)=>(
                        <div>
                        <Card className='border border-0 ' key={key} style={{ width: '200px', overflow:'hidden',height:'200px' }}>
                       <Card.Img style={{height:'200px'}}  variant="top" src={item.strMealThumb} />
                       {/* <Card.Body style={{height:'50px'}} className='text-center'>
                         {item.strMeal}
                        
                       </Card.Body> */}
                     </Card>
                     <p style={{width:'200px'}} className='  text-center mt-2' >{item.strMeal}</p>
                      </div>
                    )) : <p className='m-5 p-5'>
                        {
                            showEmptyDishesStatus && 
                            <>

<h2 className='text-danger fw-bold '>Sorry the Dish category you Choosen is currently not available !!!</h2>
<SentimentSatisfiedAltIcon className='text-danger fs-1 ' />

                            </>
                        }
                    </p>


                }
            </ul>
        </div>

      
    </div>
            <Pagination filteredDishesCategory={filteredDishesCategory} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} />
  </>

  )
}

export default FilteredDishes
