import { configureStore } from '@reduxjs/toolkit';  // Import the configureStore() function from the @reduxjs/toolkit package.
import cartReducer from './CartSlice';

 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store