import React from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import {colors} from "./constants/twitterStyle";
import {Button} from "./ui/Button";

const App = () => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <Button color="primary" size="small" text="hello" disabled />
        <Button color="primary" size="small" text="hello" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    minHeight: "100%",
  },
});

export default App;
