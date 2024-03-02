


import React, { useState } from 'react'
import './Pagination.css'

function Pagination({filteredDishesCategory,itemsPerPage,setCurrentPage}) {
  const[activeButton,setActiveButton]=useState('')
    console.log({"filtered dishes are":filteredDishesCategory});
    let numberofItems=[]

    for(let i=1 ; i<=Math.ceil(filteredDishesCategory.length/itemsPerPage);i++){
numberofItems.push(i)
    }
    const paginationButtonHandle=(item)=>{
      setCurrentPage(item)
      setActiveButton(item)
    }


    let pages = numberofItems.map((item)=>{
        return(
            <li id='page-list' className={item===activeButton?'active':""} onClick={()=>(paginationButtonHandle(item))}>{item}</li>
        )
    })
  return (
    <section>
          <ul  id='pagination'>
            {
                pages
            }
       
      
    </ul>

    </section>
  
  )
} 

export default Pagination


