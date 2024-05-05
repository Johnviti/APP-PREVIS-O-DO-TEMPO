import * as React from "react";
const Stack = createNativeStackNavigator();

import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Welcome from '../Screens/Welcome';
import Home from '../Screens/Home';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Routes = () => {
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default Routes;

