import { configureStore } from '@reduxjs/toolkit';

import popupSlice from './Popup-slice';
import userAccountSlice from './userAccount-slice';
import cartSlice from './cart-slice';

// create store
const store = configureStore({
  reducer: {
    popup: popupSlice.reducer,
    userAccount: userAccountSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
