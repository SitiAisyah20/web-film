import axios from "axios";
import { toast } from "react-toastify";
import { setBackdropPath, setDetailMovie, setGenre } from "../reducers/detailsReducers";

//detail movie by id
export const fetchDetailMovie = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dca3f16902da77f476fae29bef18cfb2`
    );
    dispatch(setDetailMovie(response.data));
    dispatch(setGenre(response.data.genres));
    dispatch(
      setBackdropPath(
        `https://image.tmdb.org/t/p/original/${response.data.backdrop_path}`
      )
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
