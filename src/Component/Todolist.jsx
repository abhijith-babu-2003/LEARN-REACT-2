import React, { useReducer, useState } from 'react'

const initialTodos =[]
const reducer =(state,action)=>{
  switch (action.type) {
    case 'ADD':
        return [...state, { text:action.payload}]
     case 'DELETE':
         return state.filter(todo=>todo.id !==action.payload)
    default:
      return state
  }
}

function Todolist() {
  const[tods,dispatch]=useReducer(reducer,initialTodos)
  const [text,setText]=useState("")

  const handleadd=()=>{
    if(text.trim()!==""){
      dispatch({type:"ADD",payload:text})
      setText("")
    }
  }
  return (
    <div>
  <h1>TODO LIST USEREDUCER</h1>
  <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
  <button onClick={handleadd}>ADD TASK</button>

  <ul>
    {tods.map((todo,id)=>(
      <li key={id}>{todo}
       <button onClick={()=>dispatch({type:'DELETE',payload:todo.id})}>DELETE</button>
      </li>
    ))}
  </ul>
    </div>
  )
}

export default Todolist