import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import React, {FC} from "react";
import {colors, paragraph, small} from "../constants/twitterStyle";

export type ButtonProps = ViewProps & {
  size: "big" | "small" | "tiny";
  color: "primary" | "transparent" | "white" | "blackOutline";
  disabled?: boolean;
  text: string;
  onPress?: () => void;
};

export const Button: FC<ButtonProps> = ({
  color,
  text,
  size,
  disabled,
  ...props
}) => {
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

  const getSize = () => {
    switch (size) {
      case "big":
        return bigStyle;

      case "small":
        return smallStyle;

      case "tiny":
        return tinyStyle;
    }
  };

  return (
    <View style={{opacity: disabled ? 0.5 : 1}} testID="button">
      <TouchableOpacity
        style={[
          disabled ? getColorStyle().disabled : getColorStyle().default,
          getSize().default,
          props.style,
        ]}
        disabled={disabled}>
        <Text style={[getSize().text]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const containerBase: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 40,
  paddingVertical: 10,
  borderRadius: 16,
};

const primaryStyle = StyleSheet.create({
  default: {
    ...containerBase,
    backgroundColor: colors.primary,
  },

  disabled: {
    ...containerBase,
    backgroundColor: `${colors.primary}50`,
  },
});

const transparentStyle = StyleSheet.create({
  default: {
    ...containerBase,
    backgroundColor: colors.primary,
    color: colors.white,
  },

  disabled: {
    ...containerBase,
    opacity: 0.8,
  },
});

const whiteStyle = StyleSheet.create({
  default: {
    ...containerBase,
    backgroundColor: colors.primary,
    color: colors.white,
  },

  disabled: {
    ...containerBase,
    opacity: 0.8,
  },
});

const blackOutlineStyle = StyleSheet.create({
  default: {
    ...containerBase,
    backgroundColor: colors.primary,
    color: colors.white,
  },

  disabled: {
    ...containerBase,
    opacity: 0.8,
  },
});

const tinyStyle = StyleSheet.create({
  text: {
    ...paragraph,
  },

  default: {
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
});

const smallStyle = StyleSheet.create({
  text: {
    ...small,
  },

  default: {
    borderRadius: 24,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
});

const bigStyle = StyleSheet.create({
  text: {
    ...paragraph,
  },

  default: {
    borderRadius: 24,
    paddingHorizontal: 96,
    paddingVertical: 16,
  },
});
