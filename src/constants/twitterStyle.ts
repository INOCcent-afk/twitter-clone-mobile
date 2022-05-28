import {TextStyle} from "react-native";

export const colors = {
  black: "#000",
  white: "#fff",
  primary: "#1c9bef",
  primary900: "#0a171f",
  green: "#019966",
  green900: "#071a14",
  blue400: "rgba(91, 112, 131, 0.4)",
  red: "#c21465",
  red900: "#200914",
  red100: "#red",
  secondary: "#202327",
  gray: "#eee",
  graySecondary: "#64686d",
  graySecondary500: "rgb(100, 104, 109, 0.5)",
  accentGray: "#191b1f",
};

export const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
  "8xl": 96,
};

const textBase: TextStyle = {
  fontFamily:
    "TwitterChirp, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  color: colors.white,
};

export const h1: TextStyle = {
  ...textBase,
  lineHeight: 1,
  fontWeight: "bold",
  fontSize: fontSize["6xl"],
};

export const h2: TextStyle = {
  ...textBase,
  lineHeight: 1,
  fontWeight: "bold",
  fontSize: fontSize["5xl"],
};

export const h3: TextStyle = {
  ...textBase,
  lineHeight: 40,
  fontWeight: "bold",
  fontSize: fontSize["4xl"],
};

export const h4: TextStyle = {
  ...textBase,
  lineHeight: 36,
  fontWeight: "bold",
  fontSize: fontSize["3xl"],
};

export const h5: TextStyle = {
  ...textBase,
  lineHeight: 32,
  fontWeight: "bold",
  fontSize: fontSize["2xl"],
};

export const h6: TextStyle = {
  ...textBase,
  lineHeight: 28,
  fontWeight: "bold",
  fontSize: fontSize.xl,
};

export const paragraph: TextStyle = {
  ...textBase,
  fontSize: fontSize.base,
  lineHeight: 24,
};

export const large: TextStyle = {
  ...textBase,
  fontSize: fontSize.lg,
  lineHeight: 28,
};

export const small: TextStyle = {
  ...textBase,
  fontSize: fontSize.sm,
  lineHeight: 20,
};

export const xSmall: TextStyle = {
  ...textBase,
  fontSize: fontSize.xs,
  lineHeight: 16,
};
