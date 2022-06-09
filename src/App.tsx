import React, {useEffect} from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {LoginScreen} from "./screens/LoginScreen";
import {MainScreens} from "./screens/navigations/MainScreens";
import {screens} from "./screens/navigations/constants";

import NetInfo from "@react-native-community/netinfo";
import {onlineManager, focusManager} from "react-query";
import {AppState, AppStateStatus, Platform} from "react-native";

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

const App = () => {
  const onAppStateChange = (status: AppStateStatus) => {
    if (Platform.OS !== "web") {
      focusManager.setFocused(status === "active");
    }
  };

  onlineManager.setEventListener(setOnline => {
    return NetInfo.addEventListener((state: any) => {
      setOnline(state.isConnected);
    });
  });

  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange);

    return () => subscription.remove();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={screens.loginScreen}
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={screens.root}
            component={MainScreens}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
