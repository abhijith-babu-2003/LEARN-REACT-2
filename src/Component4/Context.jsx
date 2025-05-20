import React, { Children, createContext, useReducer } from 'react'

export const UseReduceContext =createContext()

const initialcount=0
const reducer=(state,action)=>{
   switch(action.type){
    case 'INCREMENT':
        return state+1
    case 'reset':
        return initialcount
    case 'DECREMENT':
        return  state-1 
   default :
   return state
   }
}
function Context({children}) {
    const[state,dispatch] =useReducer(reducer,initialcount)
  return (
    <div>
        <UseReduceContext.Provider value={{state,dispatch}}>
            {children}
        </UseReduceContext.Provider>
    </div>
  )
}

export default Context