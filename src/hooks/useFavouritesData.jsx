import axios from "axios";
import { useQuery } from "react-query";

export const useFavouritesData = () =>
  useQuery("favourites", () =>
    axios.get(`${import.meta.env.VITE_SERVER_PATH}/favourites`)
  );
