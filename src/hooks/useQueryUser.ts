import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

import { UserInfo } from "../types";

export const useQueryUser = () => {
  const navigate = useNavigate();
  const getCurrentUser = async () => {
    const { data } = await axios.get<UserInfo>(
      `${process.env.REACT_APP_API_URL}/user`,
      {
        withCredentials: true,
      }
    );
    return data;
  };
  return useQuery({
    queryKey: "user",
    queryFn: getCurrentUser,
    staleTime: Infinity,
    onError: () => navigate("/"),
  });
};
