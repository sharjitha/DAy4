import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './components/View'

import { Route,Routes } from 'react-router-dom'
import Add from './components/Add'
import Demo from './components/Demo'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app">
      <h1 id="id1">STUDENTS DATA </h1>
      <View/>
      <Routes>
        <Route path='/' element={<Demo/>}> </Route> 
        <Route path='/add' element={<Add/>}> </Route> 
        
      </Routes>
         
    
      
      </div>
    </>
  )
}

export default App
