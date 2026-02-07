import './App.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import HomeProduct from './components/HomeProduct.tsx'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <HomeProduct/>
        <Footer/>
      </div>
    </>
  )
}

export default App
