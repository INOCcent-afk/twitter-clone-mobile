import {StyleSheet, View} from "react-native";
import React, {FC, ReactNode} from "react";
import {colors} from "../constants/twitterStyle";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {CustomStatusBar} from "./CustomStatusBar";

interface AppContainerProps {
  children: ReactNode;
}

export const ScreenContainer: FC<AppContainerProps> = ({children}) => {
  return (
    <SafeAreaProvider>
      <CustomStatusBar backgroundColor={colors.black} />
      <View style={styles.container}>{children}</View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
});
