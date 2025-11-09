import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { Checkout } from './Pages/Checkout'
import { OrdersPage } from './Pages/OrdersPage'
import { Tracking } from './Pages/Tracking'
import { Header } from './Pages/Header'





function App() {
  

  return (
    <>
            
      <Routes>
        <Route path='/' element={ < HomePage />} /> 
        <Route path='/checkout' element={ < Checkout/> } /> 
        <Route path='/orders' element={ < OrdersPage/> } /> 
        <Route path='/tracking' element={ < Tracking/> } /> 
      </Routes>
            
    </>
  )
}

export default App
