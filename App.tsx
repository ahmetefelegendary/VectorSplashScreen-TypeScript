const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Page1 from "./screens/Page1";
import Page4 from "./screens/Page4";
import Page2 from "./screens/Page2";
import Page3 from "./screens/Page3";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Page1"
              component={Page1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page4"
              component={Page4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page2"
              component={Page2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Page3"
              component={Page3}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
