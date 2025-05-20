import React, { useContext } from 'react'
import { UserContext } from './UseContest'

function ComponentOne() {
    const{setName}=useContext(UserContext )
  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)}  />
    </div>
  )
}

export default ComponentOne