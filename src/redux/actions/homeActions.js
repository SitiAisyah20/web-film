import axios from "axios";
import { toast } from "react-toastify";
import { setNowPlayingMovies, setPopularMovies } from "../reducers/homeReducers";

//now playing movies in carousel
export const fetchNowPlayingMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=dca3f16902da77f476fae29bef18cfb2`
    );
    dispatch(setNowPlayingMovies(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

//popular movie
export const fetchPopularMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=dca3f16902da77f476fae29bef18cfb2`
    );
    dispatch(setPopularMovies(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
}
