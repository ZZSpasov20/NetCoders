import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Router, Routes } from "react-router-dom";
import Index from './pages/Index';
import Layout from './components/Layout';
import Login from './pages/Login';



function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Index />} /> 
            <Route path='/login' element={<Login />} /> 
          </Route>
      </Routes>
 
    </>
  )
}

export default App
