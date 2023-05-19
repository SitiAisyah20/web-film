import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  detailMovie: {},
  genre: [],
  backdropPath: "",
};

// Define the reducers
const detailSlicer = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetailMovie: (state, action) => {
      state.detailMovie = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setBackdropPath: (state, action) => {
      state.backdropPath = action.payload;
    },
  },
});

// Export the actions (to set/change the state)
export const { setDetailMovie, setGenre, setBackdropPath } = detailSlicer.actions;

// Export the reducers (state / store)
export default detailSlicer.reducer;
