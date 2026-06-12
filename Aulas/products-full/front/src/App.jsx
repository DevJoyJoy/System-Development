import { useEffect, useState } from 'react'
import './App.css'
import { Products } from './pages/products.jsx'
import { Register } from './pages/register.jsx'
import { Login } from './pages/login.jsx'
import { ProductRegister } from './pages/productRegister.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ProductUpdate } from './pages/updateProduct.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/productsRegister' element={<ProductRegister/>}/>
        <Route path='/update/:id' element={<ProductUpdate/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
