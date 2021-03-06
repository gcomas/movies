import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const addItem = (id) => {
  return axios.post("http://localhost:3333/favourites", { id });
};

export const useAddFavouriteItem = () => {
  const queryClient = useQueryClient();

  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("favourites");
    },
    onError: (error, id) => {
      const favourites = queryClient.getQueryData("favourites").data;
      if (favourites.some((item) => item?.id === id)) {
        axios
          .delete(`http://localhost:3333/favourites/${id}`)
          .then(() => queryClient.invalidateQueries("favourites"));
      }
    },
  });
};
