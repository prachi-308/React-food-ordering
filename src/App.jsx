import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer'

import PlaceOrder from './pages/PlaceOrder/PlaceOrder'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-[80%] m-auto'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
     
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
    </Routes>
    <Footer/>
    </div>
    </>
    
  )
}

export default App
