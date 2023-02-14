import { createSlice } from '@reduxjs/toolkit';

const initailPaginatedData = {
  // Below 3 Lines For  Network Calls
  isLoading: false,
  isError: false,
  isSuccess: false,

  errorMessage: '',
  tabelData: {}, // Paginanted User Data
  totalCards: [], // Persiste So That User Will get Data Even After Refresh
  filter: {},
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState: initailPaginatedData,
  reducers: {
    setCard: (state, action) => {
      state.totalCards = [...state.totalCards, action.payload];
    },
  },
});

export const { setCard } = cardSlice.actions;
export default cardSlice.reducer;
