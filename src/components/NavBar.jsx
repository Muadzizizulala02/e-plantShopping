import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartCount } from '../redux/CartSlice.jsx'

function NavBar() {
  const cartCount = useSelector(selectCartCount)

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-brand">
        Paradise Nursery
      </NavLink>
      <nav className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Plants</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/cart" className="cart-link" aria-label={`Cart, ${cartCount} items`}>
          <span aria-hidden="true">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar
