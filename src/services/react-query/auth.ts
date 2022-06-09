import {ISignup} from "../../models/auth/Signup";
import {ISignIn} from "../../models/auth/SignIn";
import {IRQOnError} from "../../models/react-query/IError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useMutation} from "react-query";
import {signIn, signUp} from "../resources/auth";

export const useSignUpMutate = () => {
  const {mutate, data, isSuccess, isError, isLoading} = useMutation(
    async (data: ISignup) => {
      return signUp(data);
    },
    {
      onSuccess: async data => {
        try {
          await AsyncStorage.setItem("jwt", data.data.jwt);
        } catch (error) {}
      },
      onError: async (error: IRQOnError) => {
        console.log(error);
      },
    },
  );

  return {mutate, data, isSuccess, isError, isLoading};
};

export const useSignInMutate = () => {
  const {mutate, data, isSuccess, isError, isLoading} = useMutation(
    async (data: ISignIn) => {
      return signIn(data);
    },
    {
      onSuccess: async data => {
        try {
          await AsyncStorage.setItem("jwt", data.data.jwt);
        } catch (error) {}
      },
      onError: async (error: IRQOnError) => {
        console.log(error);
      },
    },
  );

  return {mutate, data, isSuccess, isError, isLoading};
};
