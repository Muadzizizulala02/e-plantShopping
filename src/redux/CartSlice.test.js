import { describe, expect, it } from 'vitest'
import cartReducer, {
  addItem,
  decreaseQuantity,
  increaseQuantity,
  removeItem,
  selectCartCount,
  selectCartTotal,
} from './CartSlice.jsx'

const lavender = { id: 'lavender', name: 'Lavender', image: './images/lavender.svg', cost: 10 }
const basil = { id: 'basil', name: 'Sweet Basil', image: './images/basil.svg', cost: 5 }

const wrap = (cart) => ({ cart })
const emptyState = cartReducer(undefined, { type: '@@init' })

describe('cartSlice', () => {
  it('adds a new plant with quantity 1', () => {
    const state = cartReducer(emptyState, addItem(lavender))

    expect(state.items).toEqual([{ ...lavender, quantity: 1 }])
  })

  it('increments quantity when adding a plant already in the cart', () => {
    const once = cartReducer(emptyState, addItem(lavender))
    const twice = cartReducer(once, addItem(lavender))

    expect(twice.items).toHaveLength(1)
    expect(twice.items[0].quantity).toBe(2)
  })

  it('increases and decreases quantity, never going below 1', () => {
    let state = cartReducer(emptyState, addItem(lavender))
    state = cartReducer(state, increaseQuantity('lavender'))
    expect(state.items[0].quantity).toBe(2)

    state = cartReducer(state, decreaseQuantity('lavender'))
    state = cartReducer(state, decreaseQuantity('lavender'))
    expect(state.items[0].quantity).toBe(1)
  })

  it('removes a plant type entirely', () => {
    let state = cartReducer(emptyState, addItem(lavender))
    state = cartReducer(state, addItem(basil))
    state = cartReducer(state, removeItem('lavender'))

    expect(state.items.map((item) => item.id)).toEqual(['basil'])
  })

  it('ignores quantity changes for unknown ids', () => {
    const state = cartReducer(emptyState, addItem(lavender))

    expect(cartReducer(state, increaseQuantity('missing'))).toEqual(state)
    expect(cartReducer(state, decreaseQuantity('missing'))).toEqual(state)
  })

  it('computes total count and total cost across all items', () => {
    let state = cartReducer(emptyState, addItem(lavender))
    state = cartReducer(state, addItem(lavender))
    state = cartReducer(state, addItem(basil))

    expect(selectCartCount(wrap(state))).toBe(3)
    expect(selectCartTotal(wrap(state))).toBe(25)
  })
})
