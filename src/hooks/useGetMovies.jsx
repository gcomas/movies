import axios from "axios";
import { useQuery } from "react-query";

export const useGetMovies = (title = "rambo") => {
  return useQuery(
    ["movies", title],
    () =>
      axios.get(
        `http://www.omdbapi.com/?s=${title}&apikey=${
          import.meta.env.VITE_OMDB_KEY
        }&plot=full&page=1&y`
      ),
    { refetchOnWindowFocus: false }
  );
};
