import { createSlice } from '@reduxjs/toolkit';

const initailTaskData = {
  // Below 3 Lines For  Network Calls
  isLoading: false,
  isError: false,
  isSuccess: false,

  errorMessage: '',
  taskArray: [], // Persiste So That User Will get Data Even After Refresh
};

export const taskSlice = createSlice({
  name: 'task',
  initialState: initailTaskData,
  reducers: {
    addTask: (state, action) => {
      state.taskArray = [...state.taskArray, action.payload];
    },
    upadteTaskStatus: (state, action) => {},
  },
});
/**
 * task title, description, assigned user, and due date.
 */

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
