import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { Checkout } from './Pages/Checkout'
import { OrdersPage } from './Pages/OrdersPage'
import { Tracking } from './Pages/Tracking'
import { Header } from './Pages/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'







function App() {

  const [cart, setcart] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/cart-items')
    .then((response)=>{
      setcart(response.data);
    })
  }, [])
  

  

  return (
    <>
            
      <Routes>
        <Route path='/' element={ < HomePage cart={cart} />} /> 
        <Route path='/checkout' element={ < Checkout cart={cart} /> } /> 
        <Route path='/orders' element={ < OrdersPage/> } /> 
        <Route path='/tracking' element={ < Tracking/> } /> 
      </Routes>
            
    </>
  )
}

export default App
