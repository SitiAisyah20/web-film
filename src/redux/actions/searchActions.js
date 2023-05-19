import axios from "axios";
import { toast } from "react-toastify";
import { setSearchResults } from "../reducers/searchReducers";

//search movie by query
export const searchMovies = (query) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=dca3f16902da77f476fae29bef18cfb2&query=${query}&include_adult=false`
    );
    dispatch(setSearchResults(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
