import './App.css'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import HomeProduct from './components/HomeProduct.tsx'
import FavoriteCollection from './components/FavoriteCollection.tsx'
import Collection from './pages/Collection.tsx'

function App() {
  return (
    <>
      <div>
        <Navbar/>
        {/* <HomeProduct/>
        <FavoriteCollection/> */}
        <Collection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
