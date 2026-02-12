import './App.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import HomeProduct from './components/HomeProduct.tsx'
import Collection from './pages/Collection.tsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='' element={<HomeProduct/>}></Route>
          <Route path='collections/:category' element={<Collection/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
