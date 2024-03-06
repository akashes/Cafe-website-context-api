import { createContext, useReducer } from "react"


 const DispatchContext = createContext()
 const StateContext = createContext()


const AppProvider =({children})=>{

    const intialState ={
        cartItems:[]
    }
    const reducer=(state,action)=>{
        console.log('state is ',state);
        console.log('action is ',action);
        switch(action.type){
            case "add_to_cart":
                return {...state,cartItems:[action.payload.img,action.payload.title]}
            default:
                return state

        }
    }
   const[state,dispatch]= useReducer(reducer,intialState)
   console.log('this is the state',state);
    return(
        // now dispatch and state is acessible to all the children
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>

    )
}

export {AppProvider,DispatchContext,StateContext}