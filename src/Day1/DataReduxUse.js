import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
const DataReduxUse = () => {
    const dispatch=useDispatch();
    const storeObj=useSelector((store)=>{
        return store;
    })
  return (
    <div>
       <h1>{storeObj?.score}</h1>
      <button className='btn btn-danger' onClick={()=>{
        dispatch({type:'decrement', value:+2})
      }}>Decrement</button>  
    </div>
  )
}

export default DataReduxUse