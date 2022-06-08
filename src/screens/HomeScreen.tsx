import React from "react";
import {StyleSheet, Text} from "react-native";
import {colors} from "../constants/twitterStyle";
import {ScreenContainer} from "../shared-components/ScreenContainer";

export const HomeScreen = () => {
  return (
    <ScreenContainer>
      <Text style={styles.text}>World</Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});
