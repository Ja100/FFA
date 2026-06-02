import { useState } from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Home from './pages/home'
import Testimonials from './pages/testimonials';
import Pricing from './pages/pricing';
import Features from './pages/features';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import ResetPassword from './pages/reset_pwd';
import Register from './pages/regitser';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
      <div className="flex flex-col min-h-screen">
        <Navbar/>
      <main className="grow">
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path="/testimonials" element= {<Testimonials/>}></Route>
          <Route path="/pricing" element= {<Pricing/>}></Route>
          <Route path="/features" element= {<Features/>}></Route>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path='/dashboard' element = {<Dashboard username="Jallen"/>}/>
          <Route path='/reset_pwd' element = {<ResetPassword email="jallen@100"/>}/>
      </Routes>
      </main>

      <Footer/>
      </div>
  )
}

export default App
