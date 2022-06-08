import {Button, StyleSheet, Text} from "react-native";
import React, {FC} from "react";
import {ScreenContainer} from "../shared-components/ScreenContainer";
import {StackNavigationProp} from "@react-navigation/stack";
import {screens} from "./navigations/constants";

interface SearchScreenProps {
  navigation: StackNavigationProp<any, any>;
}

export const SearchScreen: FC<SearchScreenProps> = ({navigation}) => {
  return (
    <ScreenContainer>
      <Button
        title="Log out"
        onPress={() => navigation.navigate(screens.loginScreen)}
      />
      <Text style={styles.text}>Tite</Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({text: {color: "white"}});
