import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    listCart: JSON.parse(localStorage.getItem('products')) ?? [],
  },
  reducers: {
    // acttion thêm product vào giỏ hàng
    addCart(state, action) {
      const product = action.payload;

      const idProduct = action.payload.item._id.$oid;

      // tìm product đã có trong giỏ hàng ?
      const existingItem = state.listCart.find(
        item => item.item._id.$oid === idProduct && item.email === product.email
      );

      // product chưa có -> thêm product vào giỏ hàng
      // product có trong giỏ hàng -> cập nhật số lượng, cập nhật lại giá product
      // lưu product
      if (!existingItem) {
        state.listCart.push({
          item: product.item,
          quantity: product.quantity,
          price: product.price,
          email: product.email,
        });
      } else {
        existingItem.quantity += product.quantity;
        existingItem.price += product.price;
      }
      localStorage.setItem('products', JSON.stringify(state.listCart));
    },

    // action xóa product
    deleteCart(state, action) {
      // data product cần xóa
      const productDelete = action.payload;

      state.listCart.forEach((item, index) => {
        // product có id, email === data product cần xóa
        const itemDelete =
          item.item._id.$oid === productDelete.item._id.$oid &&
          productDelete.email === item.email;

        // product thỏa điều kiện -> xóa product tại vị trí index
        if (itemDelete) {
          state.listCart.splice(index, 1);
        }
      });
      // lưu lại product sau khi xóa
      localStorage.setItem('products', JSON.stringify(state.listCart));
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
