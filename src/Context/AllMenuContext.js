import { createContext } from "react";

export const AllMenuContext = createContext()



const MenuContext=()=>{
    return(
        <AllMenuContext.Provider value={'akash'}>

        </AllMenuContext.Provider>
    )
}

export default MenuContext