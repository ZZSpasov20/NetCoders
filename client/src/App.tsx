import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Router, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Chatgpt from './pages/Chatgpt';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import List from './pages/List';
import Profile from './pages/Profile';
import MonitoringHome from './pages/MonitoringHome';
import MoreInfo from './pages/MoreInfo';
function App() {

  return (
    <>
  
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index  element={<Login />} /> 
            <Route path='/register' element={<Register />} /> 
            <Route path='/chat' element={<Chatgpt />} /> 
          </Route>

          <Route path="/app" element={<MainLayout />}>
            <Route index  element={<Home />} /> 
            <Route path="/app/favourite" element={<Favourites />} ></Route>
            <Route path="/app/list" element={<List />} ></Route>
          </Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/monitoring/home" element={<MonitoringHome></MonitoringHome>}></Route>
          <Route path="/monitoring/more-info" element={<MoreInfo></MoreInfo>}></Route>
      </Routes>
 
    </>
  )
}

export default App
