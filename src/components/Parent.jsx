import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from './Loginpage'
import Registration from './Registration'
import Master from './Master'

const Parent = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Loginpage/>}></Route>
        <Route path='/master' element={<Master/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Routes>
    </div>
  )
}

export default Parent
