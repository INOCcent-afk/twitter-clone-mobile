import {StatusBar, View} from "react-native";
import React, {FC} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface CustomStatusBarProps {
  backgroundColor: string;
  barStyle?: "dark-content" | "light-content" | "default";
}

export const CustomStatusBar: FC<CustomStatusBarProps> = ({
  backgroundColor,
  barStyle = "light-content",
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
