import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Order from './pages/Order'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md: px-[7vw] lg:px[9vw]'>
      <ToastContainer />
    <Navbar />
    <SearchBar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/collection' element={<Collections/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/orders' element={<Order/>} />
    <Route path='/place-order' element={<PlaceOrder/>} />
    <Route path='/product/:productId' element={<Product/>} />
    <Route path='/login' element={<Login/>} />
    </Routes>
    <Footer/>
      
    </div>
  )
}

export default App
