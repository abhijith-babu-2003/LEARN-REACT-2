import React from 'react'

function SiblingOne({setMessage}) {
  return (
    <div>
<button onClick={()=>setMessage("helooo ")}>click</button>
    </div>
  )
}

export default SiblingOne