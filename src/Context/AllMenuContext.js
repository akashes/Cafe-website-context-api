import { createContext, useEffect,useState } from "react";
import axios from "axios";

export const MenuContext = createContext()



export const AllMenuContextProvider=({children})=>{
    let [menu,setMenu]=useState([])

    const API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=c'

    const fetchMenuData=async()=>{
            const res=await axios.get(API_URL)
            console.log(res.data.meals);
            setMenu(res.data.meals)
    }
    useEffect(()=>{
fetchMenuData()
    },[])
    return(
        <MenuContext.Provider value={menu}>
            {children}
        </MenuContext.Provider>
    )
}

