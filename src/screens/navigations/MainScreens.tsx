import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeScreen} from "../HomeScreen";
import {SearchScreen} from "../SearchScreen";

const Tab = createBottomTabNavigator();

export const MainScreens = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
