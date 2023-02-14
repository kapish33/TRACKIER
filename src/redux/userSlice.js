import { createSlice } from '@reduxjs/toolkit';

const InitUser = {
  // Below 3 Lines For  Network Calls
  isLoading: false,
  isError: false,
  isSuccess: false,

  // list of regestered Users this bleongs to network
  myInfo: {
    firstName: 'first',
    lastName: 'last',
    email: 'email@test.com',
    password: 'Qwe123@#',
    Conform_password: 'Qwe123@#',
  },
  tokens: '123',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: InitUser,
  reducers: {
    logout: (state, action) => {
      state.myInfo = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        Conform_password: '',
      };
      state.tokens = '';
    },
    setUser: (state, action) => {
      state.myInfo = {
        firstName: 'first',
        lastName: 'last',
        email: 'email@test.com',
        password: 'Qwe123@#',
        Conform_password: 'Qwe123@#',
      };
      state.tokens = '123';
    },
  },
});

export const { logout, setUser } = userSlice.actions;
export default userSlice.reducer;
