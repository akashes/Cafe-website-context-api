import { createContext } from "react";

export const AllMenuContext = createContext()



const AllMenuContextProvider=({children})=>{
    return(
        <AllMenuContext.Provider value={{"name":"akash"}}>
{children}
        </AllMenuContext.Provider>
    )
}

export default AllMenuContextProvider