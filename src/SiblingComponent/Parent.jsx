import React, { useState } from 'react'
import SiblingOne from './SiblingOne'
import SiblingTwo from './SiblingTwo'

function Parent() {
    const[message,setMessage]=useState("")
  return (
    <div>
        <SiblingOne setMessage={setMessage}/>
        <SiblingTwo message={message}/>
    </div>
  )
}

export default Parent