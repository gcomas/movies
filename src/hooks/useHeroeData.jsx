import axios from "axios";
import { useQuery } from "react-query";

export const useHeroData = () =>
  useQuery("hero", () => axios.get("http://localhost:3333/hero"), {
    refetchOnWindowFocus: false,
  });
