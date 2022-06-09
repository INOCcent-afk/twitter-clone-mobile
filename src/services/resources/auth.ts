import {ISignup} from "../../models/auth/Signup";
import {ISignIn} from "../../models/auth/SignIn";
import axios from "axios";
import {apiConfig} from "../config";

export const signUp = async (data: ISignup) => {
  try {
    const response = await axios.post(
      `${apiConfig.url.API_URL}/api/auth/local/register`,
      data,
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (data: ISignIn) => {
  try {
    const response = await axios.post(
      `http://192.168.254.121:1337/api/auth/local`,
      data,
    );

    return response;
  } catch (error) {
    console.log(error.response);
    throw error;
  }
};

export const logout = async () => {
  //   if (isServer()) {
  //     localStorage.removeItem("jwt");
  //     Router.push("/");
  //     window.location.reload();
  //   }
};
