import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenTwelve from "./src/screens/ScreenTwelve";
import ScreenEleven from "./src/screens/ScreenEleven";
import ScreenThirteen from "./src/screens/ScreenThirteen";
import Responsive from "./src/screens/Responsive";
import ScreenLogin from "./src/screens/ScreenLogin";
import ScreenProgress from "./src/screens/ScreenProgress";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screenprogress">
        <Stack.Screen
          name="responsive"
          options={{ headerShown: false }}
          component={Responsive}
        />
        <Stack.Screen
          name="screenThirteen"
          options={{ headerShown: false }}
          component={ScreenThirteen}
        />
        <Stack.Screen
          name="screenEleven"
          options={{ headerShown: false }}
          component={ScreenEleven}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="screenTwelve"
          component={ScreenTwelve}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="screenlogin"
          component={ScreenLogin}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="screenprogress"
          component={ScreenProgress}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
