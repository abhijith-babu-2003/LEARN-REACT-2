import React, { useState } from 'react'
import Childone from './Childone'

function ChildT() {
    const[count,setCount]=useState(0)
  

  return (
    <div>
        <Childone name="abhijith BABU"/>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>add</button>
    </div>
  )
}

export default ChildT