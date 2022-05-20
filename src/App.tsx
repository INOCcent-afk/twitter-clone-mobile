import React from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.heading}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "blue",
    color: "#fff",
    padding: 40,
    textAlign: "center",
  },
});

export default App;
