import axios from "axios";
import { useQuery } from "react-query";

export const useFavouritesData = () =>
  useQuery("favourites", () => axios.get("http://localhost:3333/favourites"));
