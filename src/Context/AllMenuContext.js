import { createContext } from "react";

const AllMenuContext = createContext()

const AllMenus=({children})=>{
    return(
        <AllMenuContext.Provider value={}>
            {children}

        </AllMenuContext.Provider>

    )
}
export default AllMenus