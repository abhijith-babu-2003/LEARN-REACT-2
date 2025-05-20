import React, { useCallback, useState } from 'react'
import ChildA from './ChildA'

function Child() {
    const[age,setAge]=useState(10)
    const[salary,setSalary]=useState(10000)

    const increment =useCallback(()=>{
        setAge(age+1)
    },[age])
    
  return (
    <div>
        <p>{salary}</p>
        <button onClick={()=>setSalary(salary+1000)}>add salary</button>
  <ChildA onClick={increment}/>
    </div>
  )
}

export default Child