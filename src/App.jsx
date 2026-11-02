import { Link, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import ProductList from './components/ProductList.jsx'
import ShoppingCart from './components/CartItem.jsx'
import AboutUs from './components/AboutUs.jsx'

function LandingPage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Paradise Nursery</h1>
        <p>
          Bring a little paradise home. Browse our hand-picked aromatic and medicinal house plants,
          ready to brighten your windowsills.
        </p>
        <Link to="/products" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
    </>
  )
}

export default App
