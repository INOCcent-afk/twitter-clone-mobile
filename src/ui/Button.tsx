import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from "react-native";
import React, {FC} from "react";
import {colors, paragraph} from "../constants/twitterStyle";

export type ButtonProps = ViewProps & {
  size: "big" | "small" | "tiny";
  color: "primary" | "transparent" | "white" | "blackOutline";
  disabled?: boolean;
  text: string;
  onPress?: () => void;
};

export const Button: FC<ButtonProps> = ({color, text}) => {
  const getColorStyle = () => {
    switch (color) {
      case "primary":
        return primaryStyle;

      case "transparent":
        return transparentStyle;

      case "white":
        return whiteStyle;

      case "blackOutline":
        return blackOutlineStyle;
    }
  };

  return (
    <TouchableOpacity style={[getColorStyle().default]}>
      <Text style={[getColorStyle().text]}>{text}</Text>
    </TouchableOpacity>
  );
};

const containerBase: ViewStyle = {
  alignSelf: "baseline",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 40,
  paddingVertical: 10,
  borderRadius: 16,
};

const primaryStyle = StyleSheet.create({
  text: {
    ...paragraph,
  },

  default: {
    ...containerBase,
    backgroundColor: colors.primary,
  },
});

const transparentStyle = StyleSheet.create({
  text: {
    ...paragraph,
  },

  default: {
    ...containerBase,
    backgroundColor: colors.primary,
    color: colors.white,
  },
});

const whiteStyle = StyleSheet.create({
  text: {
    ...paragraph,
  },

  default: {
    ...containerBase,
    backgroundColor: colors.primary,
    color: colors.white,
  },
});

const blackOutlineStyle = StyleSheet.create({
  text: {
    ...paragraph,
  },

  default: {
    ...containerBase,
    backgroundColor: colors.primary,
    color: colors.white,
  },
});
