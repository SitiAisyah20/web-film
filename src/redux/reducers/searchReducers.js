import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  searchResults: [],
  error: null,
};

// Define the reducers
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export the actions (to set/change the state)
export const { setSearchResults, setError } = searchSlice.actions;

// Export the reducers (state / store)
export default searchSlice.reducer;
