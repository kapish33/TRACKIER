import { createSlice } from '@reduxjs/toolkit';

const initailTaskData = {
  // Below 3 Lines For  Network Calls
  isLoading: false,
  isError: false,
  isSuccess: false,

  errorMessage: '',
  statusArray: [], // Persiste So That User Will get Data Even After Refresh
};

export const statusSlice = createSlice({
  name: 'status',
  initialState: initailTaskData,
  reducers: {
    setTask: (state, action) => {
      state.statusArray = [...state.statusArray, action.payload];
    },
  },
});

export const { setTask } = statusSlice.actions;
export default statusSlice.reducer;
