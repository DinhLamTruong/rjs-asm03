import { createSlice } from '@reduxjs/toolkit';

const userAccountSlice = createSlice({
  name: 'userAccount',
  initialState: {
    currUser: JSON.parse(localStorage.getItem('currUser')) ?? null,
  },
  reducers: {
    // action login
    onLogin(state, action) {
      state.currUser = { ...action.payload };
      localStorage.setItem('currUser', JSON.stringify(action.payload));
    },
    // action logout
    onLogout(state, action) {
      state.currUser = null;
      localStorage.removeItem('currUser');
    },
  },
});

export const userAccountActions = userAccountSlice.actions;
export default userAccountSlice;
