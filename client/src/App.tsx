import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from "react-router-dom";
import Index from './pages/Index';
import Page2 from './pages/Page2';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Index />}></Route>
        
          <Route path="/page2" element={<Page2 />}></Route>
        </Routes>
    </>
  )
}

export default App
