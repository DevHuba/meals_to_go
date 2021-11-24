import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <NavigationContainer>
      <AccountStack.Navigator>
        <AccountStack.Group
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalPresentationIOS,
          }}
        >
          <AccountStack.Screen name="Main" component={AccountScreen} />
          <AccountStack.Screen name="Login" component={LoginScreen} />
          <AccountStack.Screen name="Register" component={RegisterScreen} />
        </AccountStack.Group>
      </AccountStack.Navigator>
    </NavigationContainer>
  );
};
