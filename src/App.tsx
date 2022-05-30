import React, {useEffect, useState} from "react";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import {colors} from "./constants/twitterStyle";
import {Button} from "./ui/Button";
import axios from "axios";

const App = () => {
  const [state, setState] = useState<any>(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "http://192.168.254.121:1337/api/tweets",
      );

      if (response.status === 200) {
        setState(response.data);

        return;
      } else {
        throw new Error("Noice");
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        {state &&
          state.data.map((item: any) => (
            <Text key={item.id} style={styles.text}>
              {item.attributes.text}
            </Text>
          ))}

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
    height: "100%",
  },

  text: {
    color: "white",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
  },
});

export default App;
