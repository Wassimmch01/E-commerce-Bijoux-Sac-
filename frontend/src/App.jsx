/*import { useState } from 'react'*/
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './components/Shop'
import Home from './components/Home'
import About from './components/AboutUs';
import Product from './components/Product'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Auth from './components/Authform'
import Contact from './components/Contact';

function App() {
/*const [count, setCount] = useState(0)*/

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/Auth' element={<Auth/>}/>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
