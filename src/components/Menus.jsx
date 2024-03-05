import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Hero from './Hero'
import SpecialDishes from './SpecialDishes'
import FilteredDishes from './FilteredDishes'
import Header from './Header'
import { createContext } from 'react'


export const MenuContext = createContext() 


function Menus() {


    let [menu,setMenu]=useState([])
    const[loading,setLoading]=useState(false)

    const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'

    const fetchData=async()=>{
      setLoading(true)
            const res=await axios.get(API_URL)
            console.log(res.data.meals);
            setMenu(res.data.meals)
            setLoading(false)
    }
    
    useEffect(()=>{
        fetchData()
       

    },[])

    const menuImage = menu.map((item,key)=>{
        return(
            <div>
            <img key={key} src={item.strMealThumb} alt="" />
       <h2>{item.strCategory}</h2>
       </div>
            
        )
    })

  return (
    <div>
      <MenuContext.Provider value={menu}>

      
      <Header/>
        <Hero/>
        {
          !loading ?          <SpecialDishes />   :
           <h1 className=" m-5 mt-5 p-5 text-center text-danger fw-bold">Loading...</h1>
           


         

        }
        {
          !loading ?       <FilteredDishes
          // categoryData={categoryData}
           allMenus={menu}
            // singleDish={singleDish}
             />
             :             <h1 className=" m-5 mt-5 p-5 text-center text-danger fw-bold">Loading...</h1>


        }
      
      </MenuContext.Provider>
    </div>
  )
}

export default Menus
