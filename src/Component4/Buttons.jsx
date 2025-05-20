import React, { useContext } from 'react'
import { UseReduceContext } from './Context'

function Buttons() {
    const{state,dispatch}=useContext(UseReduceContext)
  return (
    <div>
        <p>{state}</p>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
         <button onClick={()=>dispatch({type:'reset'})}>reset</button>
          <button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button>
    </div>
  )
}

export default Buttons