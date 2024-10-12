import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Task 2
    // You have the basic layout in the CartSlice.jsx file.
    // Define Reducer Functions
    // Now implement the reducer property of the slice for adding, removing, and updating the number of items in the cart.
    // These reducer functions will be called when user wants to add or remove the quantity of plants within the cartItems component.
    // The addItem() reducer adds a new plant item to the items array which you initialized in the previous step.
    // The addItem() function should get called when the user selects an Add to cart on the plant listing page. Subsequently, the handleAddToCart() gets called which has the plant type as a parameter.
    // The handleAddToCart() function will then dispatch the plant details to the addItem() reducer function in CartSlice.jsx.
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;   
        const existingItem = state.items.find(item => item.name === name);

        existingItem ? existingItem.quantity++ : state.items.push({ name, image, cost, quantity: 1 })
    },
    // Now you need to complete code for the removeItem() and updateQuantity() reducers.
    // removeItem(): This reducer removes an item from the cart based on its name and gets called when the user wants to remove products from the cart.
    removeItem: (state, action) => {
        // const { name, image, cost } = action.payload;
        state.items = state.items.filter(item => item.name !== action.payload)
    },
    // updateQuantity(): To create this function, start by extracting the item's name and amount from the action.payload. Then, look for the item in the 
    // state.items array that matches the extracted name. If the item is found, update its quantity to the new amount provided in the payload. This ensures 
    // the item’s quantity is correctly updated based on the action.
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);

        if(itemToUpdate) itemToUpdate.quantity = quantity;
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
