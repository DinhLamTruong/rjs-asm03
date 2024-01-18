import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: { product: {}, isPopupVisiable: false },
  reducers: {
    // action show product
    showPopupProduct(state, action) {
      state.isPopupVisiable = true;
      state.product = action.payload;
    },
    // action ẩn product
    hidePopupProduct(state) {
      state.isPopupVisiable = false;
    },
  },
});
export const popupActions = popupSlice.actions;
export default popupSlice;
