import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeItem } from '../redux/CartSlice.jsx'
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
            onClick={() => dispatch(decreaseQuantity(item.id))}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <span aria-label={`Quantity of ${item.name}`}>{item.quantity}</span>
          <button
            type="button"
            aria-label={`Increase quantity of ${item.name}`}
            onClick={() => dispatch(increaseQuantity(item.id))}
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

export default CartItem
