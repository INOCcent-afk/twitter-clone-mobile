import React, {FC} from "react";
import {Button, StyleSheet, Text} from "react-native";
import {colors} from "../constants/twitterStyle";
import {ScreenContainer} from "../shared-components/ScreenContainer";
import {screens} from "./navigations/constants";
import {StackNavigationProp} from "@react-navigation/stack";

interface LoginScreenProps {
  navigation: StackNavigationProp<any, any>;
}

export const LoginScreen: FC<LoginScreenProps> = ({navigation}) => {
  return (
    <ScreenContainer>
      <Text style={styles.text}>LoginScreen</Text>

      <Button
        title="Login"
        onPress={() =>
          navigation.navigate(screens.root, {screen: screens.homeScreen})
        }
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});
