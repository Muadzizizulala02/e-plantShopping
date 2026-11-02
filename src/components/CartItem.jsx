import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeItem,
  selectCartItems,
  selectCartTotal,
  updateQuantity,
} from '../redux/CartSlice.jsx'
import { formatPrice } from '../utils/formatPrice.js'

function CartItem({ item }) {
  const dispatch = useDispatch()
  const subtotal = item.cost * item.quantity

  return (
    <article className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />

      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-unit">Unit cost: {formatPrice(item.cost)}</p>
        <p className="cart-item-subtotal">Subtotal: {formatPrice(subtotal)}</p>
      </div>

      <div className="cart-item-controls">
        <div className="quantity-control">
          <button
            type="button"
            aria-label={`Decrease quantity of ${item.name}`}
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <span aria-label={`Quantity of ${item.name}`}>{item.quantity}</span>
          <button
            type="button"
            aria-label={`Increase quantity of ${item.name}`}
            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
          >
            +
          </button>
        </div>
        <button type="button" className="btn btn-danger" onClick={() => dispatch(removeItem(item.id))}>
          Delete
        </button>
      </div>
    </article>
  )
}

function ShoppingCart() {
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

export default ShoppingCart
