import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../redux/CartSlice.jsx'
import { formatPrice } from '../utils/formatPrice.js'
import CartItem from './CartItem.jsx'

function Cart() {
  const items = useSelector(selectCartItems)
  const total = useSelector(selectCartTotal)

  if (items.length === 0) {
    return (
      <section className="cart-page cart-empty">
        <h1>Your cart is empty</h1>
        <p>Looks like you have not added any plants yet.</p>
        <Link to="/products" className="btn btn-primary">
          Continue Shopping
        </Link>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-list">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: {formatPrice(total)}</h2>
        <div className="cart-actions">
          <Link to="/products" className="btn btn-secondary">
            Continue Shopping
          </Link>
          <button type="button" className="btn btn-primary" onClick={() => alert('Checkout is not implemented yet.')}>
            Checkout
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cart
