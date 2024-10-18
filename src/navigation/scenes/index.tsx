import SiginIn from "@features/auth/sigin-in";
import { NavigationContainer } from "@react-navigation/native";
import theme, { navigationTheme, ThemeProvider } from "@theme";
import RootScenes from "./root-scenes";
import { AuthProvider } from "@components/context/auth-context";

export default function MainNavigaion() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={navigationTheme}>
          <RootScenes />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}
