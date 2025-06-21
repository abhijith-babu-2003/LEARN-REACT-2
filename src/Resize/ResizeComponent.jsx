import React, { useEffect, useState } from 'react'

function ResizeComponent() {
    const[width,setWidth]=useState(window.innerWidth)
    useEffect(()=>{
       const handleResize=()=> setWidth(window.innerWidth)
        window.addEventListener('resize',handleResize)

       return()=>window.addEventListener('resize',handleResize)
    },[])
  return (
    <div>
<h1>{width}</h1>

    </div>
  )
}

export default ResizeComponent