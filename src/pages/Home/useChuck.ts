import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Chuck = {
  value: string;
};

function useChuck() {
  return useQuery({
    queryKey: ["chuck"],
    staleTime: 0,
    queryFn: () =>
      axios
        .get<Chuck>("https://api.chucknorris.io/jokes/random")
        .then((response) => response.data),
  });
}

export default useChuck;