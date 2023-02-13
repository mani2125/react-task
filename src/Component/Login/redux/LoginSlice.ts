import { createSlice } from '@reduxjs/toolkit'

/**
 * Initialize login store value from local storage
 * Handling both login and logout and updating rudux store and local storage
*/
export const Login = createSlice({
  name: 'login',
  initialState: {
    loggedIn: localStorage.getItem('login')
    ? JSON.parse(localStorage.getItem('login'))
    : false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.loggedIn = action.payload;
      localStorage.setItem('login', JSON.stringify(action.payload))
    },
    logoutSuccess: (state, action) =>  {
      state.loggedIn = action.payload;
      localStorage.removeItem('login')
    },
  },
});
