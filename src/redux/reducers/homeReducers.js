import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  nowPlayingMovies: [],
  popularMovies: [],
};

// Define the reducers
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    }
  },
});

// Export the actions (to set/change the state)
export const { setNowPlayingMovies, setPopularMovies } = homeSlice.actions;

// Export the reducers (state / store)
export default homeSlice.reducer;
