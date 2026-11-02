import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import LandingPage from './components/LandingPage.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import AboutUs from './components/AboutUs.jsx'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
    </>
  )
}

export default App
