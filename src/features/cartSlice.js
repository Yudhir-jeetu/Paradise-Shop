import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      existingItem ? existingItem.quantity++ : state.items.push({ ...action.payload, quantity: 1 });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      item.quantity === 1 ? 
        state.items = state.items.filter(i => i.id !== action.payload) : 
        item.quantity--;
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;