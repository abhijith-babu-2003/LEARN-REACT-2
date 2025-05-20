import React from 'react'

function ChildA({onClick}) {
    console.log("child is renderd");
    
  return (
    <div>
  <button onClick={onClick}>increment age</button>
    </div>
  )
}

export default React.memo(ChildA)