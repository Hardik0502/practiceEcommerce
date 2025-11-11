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

  useEffect(() => {  // we made changes in vite.config.js file so we don't need to write https://localhost:3000
    axios.get('/api/cart-items?expand=product')  // ?expand=product it will help to give the data in more detail way
    .then((response)=>{
      setcart(response.data);
      // console.log(response.data);
    })
  }, [])
  

  

  return (
    <>
            <Header cart={cart} />
      <Routes>
        <Route path='/' element={ < HomePage cart={cart} />} /> 
        <Route path='/checkout' element={ < Checkout cart={cart} /> } /> 
        <Route path='/orders' element={ < OrdersPage cart={cart} /> } /> 
        <Route path='/tracking' element={ < Tracking/> } /> 
      </Routes>
            
    </>
  )
}

export default App
