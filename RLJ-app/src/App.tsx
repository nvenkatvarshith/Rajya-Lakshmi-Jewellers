import './App.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import HomeProduct from './components/HomeProduct.tsx'
import Collection from './pages/Collection.tsx'
import { Routes, Route } from 'react-router-dom'
import ProductDescription from './components/ProductDescription.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='' element={<HomeProduct/>}></Route>
          <Route path='collections/:category' element={<Collection/>}></Route>
          <Route path='product-description' element={<ProductDescription/>}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<Signup />}></Route>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
