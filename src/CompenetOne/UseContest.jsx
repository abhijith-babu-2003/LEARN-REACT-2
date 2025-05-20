import React, { createContext, useState } from 'react'

export const UserContext = createContext()
function UseContest({children}) {
const[name,setName]=useState("")
  return (
    <div>
      <UserContext.Provider value={{name,setName}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UseContest