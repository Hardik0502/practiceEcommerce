import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './Pages/HomePage'
import { Checkout } from './Pages/Checkout'



function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={ < HomePage />} /> 
        <Route path='/checkout' element={ < Checkout/> } /> 
      </Routes>
            
    </>
  )
}

export default App
