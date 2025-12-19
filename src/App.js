import React from 'react'
import Approutes from './Approutes'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Outlet/>
      <Approutes/>
    </div>
  )
}

export default App
