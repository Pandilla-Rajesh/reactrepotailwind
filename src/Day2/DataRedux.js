import React from 'react'
import { useSelector } from 'react-redux'

const DataRedux = () => {
    const storeObj=useSelector((store)=>{
        return store;
    })
  return (
    <div>
        <h1>{storeObj?.score}</h1>
    </div>
  )
}

export default DataRedux