import React, {FC} from "react";
import {Button, StyleSheet, Text} from "react-native";
import {colors} from "../constants/twitterStyle";
import {ScreenContainer} from "../shared-components/ScreenContainer";
import {StackNavigationProp} from "@react-navigation/stack";
import {useSignInMutate} from "../services/react-query/auth";
import {screens} from "./navigations/constants";

interface LoginScreenProps {
  navigation: StackNavigationProp<any, any>;
}

export const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  const {mutate} = useSignInMutate();

  const data = {
    identifier: "marciano@gmail.com",
    password: "passwordinoc",
  };

  const login = () => {
    mutate(data);

    navigation.navigate(screens.root, {screen: screens.homeScreen});
  };

  return (
    <ScreenContainer>
      <Text style={styles.text}>LoginScreen</Text>
      <Button title="Login" onPress={() => login()} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});
