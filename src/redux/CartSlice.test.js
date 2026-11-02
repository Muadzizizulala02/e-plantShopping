import { describe, expect, it } from 'vitest'
import cartReducer, {
  addItem,
  removeItem,
  selectCartCount,
  selectCartTotal,
  updateQuantity,
} from './CartSlice.jsx'

const lavender = { id: 'lavender', name: 'Lavender', image: './images/lavender.svg', cost: 10 }
const basil = { id: 'basil', name: 'Sweet Basil', image: './images/basil.svg', cost: 5 }

const wrap = (cart) => ({ cart })
const emptyState = cartReducer(undefined, { type: '@@init' })

describe('cartSlice', () => {
  it('addItem adds a new plant with quantity 1', () => {
    const state = cartReducer(emptyState, addItem(lavender))

    expect(state.items).toEqual([{ ...lavender, quantity: 1 }])
  })

  it('addItem increments quantity when the plant is already in the cart', () => {
    const once = cartReducer(emptyState, addItem(lavender))
    const twice = cartReducer(once, addItem(lavender))

    expect(twice.items).toHaveLength(1)
    expect(twice.items[0].quantity).toBe(2)
  })

  it('updateQuantity sets the quantity of a plant', () => {
    let state = cartReducer(emptyState, addItem(lavender))
    state = cartReducer(state, updateQuantity({ id: 'lavender', quantity: 4 }))

    expect(state.items[0].quantity).toBe(4)
  })

  it('updateQuantity ignores values below 1 and unknown ids', () => {
    const state = cartReducer(emptyState, addItem(lavender))

    expect(cartReducer(state, updateQuantity({ id: 'lavender', quantity: 0 }))).toEqual(state)
    expect(cartReducer(state, updateQuantity({ id: 'missing', quantity: 3 }))).toEqual(state)
  })

  it('removeItem removes a plant type entirely', () => {
    let state = cartReducer(emptyState, addItem(lavender))
    state = cartReducer(state, addItem(basil))
    state = cartReducer(state, removeItem('lavender'))

    expect(state.items.map((item) => item.id)).toEqual(['basil'])
  })

  it('computes total count and total cost across all items', () => {
    let state = cartReducer(emptyState, addItem(lavender))
    state = cartReducer(state, addItem(lavender))
    state = cartReducer(state, addItem(basil))

    expect(selectCartCount(wrap(state))).toBe(3)
    expect(selectCartTotal(wrap(state))).toBe(25)
  })
})
