import React from 'react'

function Childone({name}) {
    console.log("child is renderd ract.memo");
    
  return (
    <div>
        <p>{name}</p>
    </div>
  )
}

export default React.memo(Childone)