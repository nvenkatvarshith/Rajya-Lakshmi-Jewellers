import './App.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import HomeProduct from './components/HomeProduct.tsx'
import Collection from './components/Collection.tsx'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <HomeProduct/>
        <Collection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
