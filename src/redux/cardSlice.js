import { createSlice } from '@reduxjs/toolkit';

const initailPaginatedData = {
  // Below 3 Lines For  Network Calls
  isLoading: false,
  isError: false,
  isSuccess: false,

  errorMessage: '',
  tabelData: {}, // Paginanted User Data
  currentTableState: {
    name: '',
    user: '',
    changes: '',
  }, // Persiste So That User Will get Data Even After Refresh
  filter: {},
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState: initailPaginatedData,
  reducers: {
    setTable: (state, action) => {
      state.currentTableState = action.payload;
    },
    clearState: (state, action) => {
      state.currentTableState = {
        name: '',
        user: '',
        changes: '',
      };
    },
  },
});

export const { setTable, clearState, rerender } = cardSlice.actions;
export default cardSlice.reducer;
