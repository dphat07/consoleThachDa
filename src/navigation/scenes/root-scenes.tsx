import { useAuth } from "@components/context/auth-context";
import { loggedInScreens, notLoggedInScreens } from "@navigation/config/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function RootScenes() {
  const { Navigator, Group, Screen } = createNativeStackNavigator();
  const { isLoggedIn } = useAuth();

  const screen = isLoggedIn ? loggedInScreens : notLoggedInScreens;

  return (
    <Navigator>
      <Group>
        {Object.entries(screen).map(([key, value]) => (
          <Screen
            key={key}
            name={key}
            component={value}
            options={{ headerShown: false }}
          />
        ))}
      </Group>
    </Navigator>
  );
}
