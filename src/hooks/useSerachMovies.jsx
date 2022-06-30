import axios from "axios";
import { useQuery } from "react-query";

export const useSearchMovies = (search) => {
  return useQuery(
    "searchMovies",
    () =>
      axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=3716e5f4&plot&type=movie&page=1`
      ),
    { enabled: false }
  );
};
