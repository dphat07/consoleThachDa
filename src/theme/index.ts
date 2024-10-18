/* eslint-disable no-unused-vars */
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

import { DefaultTheme } from "@react-navigation/native";
import { createTheme, useTheme as useRestyleTheme } from "@shopify/restyle";

import Colors from "./colors";
import { Spacing } from "./layouts";

export {
  ThemeProvider,
  createBox,
  createRestyleComponent,
  createText,
  createTheme,
} from "@shopify/restyle";

export const theme = createTheme({
  colors: {
    ...Colors,
  },
  spacing: {
    ...Spacing,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      color: "text",
      fontSize: 12,
    },
    label: {
      fontSize: 12,
      fontWeight: "600",
      color: "title",
      lineHeight: 20,
    },
    helperLabel: {
      fontSize: 12,
      lineHeight: 16,
      color: "gray888",
    },
    header: {
      fontSize: 48,
      fontWeight: "bold",
      color: "title",
    },
    footer: {
      textAlign: "left",
      color: "gray888",
      lineHeight: 20,
      textDecorationLine: "underline",
      fontSize: 14,
    },
    showMore: {
      fontSize: 12,
      lineHeight: 16,
      color: "blue_500",
      textAlign: "right",
    },
    body: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: "700",
      color: "text",
    },
  },
  cardVariants: {
    defaults: {},
    primary: {
      backgroundColor: "blue_500",
    },
    secondary: {
      backgroundColor: "cardSecondaryBackground",
    },
  },
  borderRadii: {
    none: 0,
    xxs: 2,
    xs: 4,
    s: 6,
    m: 8,
    l: 10,
    _14: 14,
    _28: 28,
    xl: 33,
    xxl: 40,
    _3xl: 50,
    full: 99999,
  },
  zIndices: {
    _1: 1,
    full: 9999,
  },
});
type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...theme.colors,
  },
};

export const makeStyles = <T extends NamedStyles<T> | NamedStyles<unknown>>(
  styles: (theme: Theme) => T & NamedStyles<T> //work fine
) => {
  return () => {
    return styles(theme);
  };
};

export const useTheme = () => {
  return useRestyleTheme<Theme>();
};

export type Theme = typeof theme;

export default theme;
