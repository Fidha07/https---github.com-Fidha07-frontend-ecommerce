import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import HomeCategory from './Pages/HomeCategory';
import Cart from './Pages/Cart';
import LoginSignup from'./Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/banner_women.png'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/women' element={<HomeCategory banner={women_banner} category="women"/>}/>
        <Route path='/girls' element={<HomeCategory category="girl"/>}/>
        <Route path='/accessories' element={<HomeCategory category="accessorie"/>}/>
        <Route path="/product" element={<product/>}></Route>
          <Route path=':productId' element={<product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>  
        <Route path='/login' element={<LoginSignup/>}></Route>
       
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
