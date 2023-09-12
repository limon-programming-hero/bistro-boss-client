import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { authContext } from "../AuthProvider/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { LogOut } = useContext(authContext);
  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("jwt-access-token");
      const jwtToken = `Bearer ${token}`;
      if (token) {
        config.headers.authorization = jwtToken;
      }
      return config;
    });

    // Add a response interceptor
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log(error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await LogOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [navigate, LogOut]);
  return [axiosSecure];
};

export default UseAxiosSecure;
