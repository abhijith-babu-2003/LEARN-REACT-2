import React, { useReducer } from 'react'

const initialstate =0

const reducer=(state,action)=>{
  switch (action.type) {
    case 'INCREMENT':
        return state+1
    case 'DECREMENT':
        return state-1
    case 'RESET':
      return initialstate    
    default:
        return state
  }
}
function Counter() {
    const[count,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch({ type:'INCREMENT'})}>INCREMENT</button>
          <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>DECREMENT</button>
    </div>
  )
}

export default Counter