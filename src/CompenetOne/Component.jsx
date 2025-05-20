import React, { useContext } from 'react'
import { UserContext } from './UseContest'

function Component() {
    const{name}=useContext(UserContext)
  return (
    <div>
        <p>{name}</p>
    </div>
  )
}

export default Component