import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetch() {
    const[list,setList] =useState({})

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response=>{
            setList(response.data)
        })
        .catch(error=>
            console.log(error)
            
        )
    },[])
  return (
    <div>
       {list.title}
       <p>{list.body}</p>
    </div>
  )
}

export default DataFetch