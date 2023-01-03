import axios from "axios";
import { useQuery } from "react-query";

export const useHeroData = () =>
  useQuery(
    "hero",
    () => axios.get(`${import.meta.env.VITE_SERVER_PATH}/hero`),
    {
      refetchOnWindowFocus: false,
    }
  );
