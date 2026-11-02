import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, name, image, cost } = action.payload
      const existing = state.items.find((item) => item.id === id)

      if (existing) {
        existing.quantity += 1
        return
      }

      state.items.push({ id, name, image, cost, quantity: 1 })
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload
      const item = state.items.find((entry) => entry.id === id)

      if (item && quantity >= 1) {
        item.quantity = quantity
      }
    },
  },
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions

export const selectCartItems = (state) => state.cart.items

export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)

export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.cost * item.quantity, 0)

const cartReducer = cartSlice.reducer

export default cartReducer
