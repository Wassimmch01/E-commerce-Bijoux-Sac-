import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Shop from './components/Shop'
import Home from './components/Home'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
