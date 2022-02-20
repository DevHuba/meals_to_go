import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";

import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
import { CheckoutErrorScreen } from "../../features/checkout/screens/checkout-error.screen";
import { CheckoutSuccessScreen } from "../../features/checkout/screens/checkout-success.screen";

const CheckoutStack = createStackNavigator();

export const CheckoutNavigator = () => {
  return (
    <CheckoutStack.Navigator>
      <CheckoutStack.Group
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <CheckoutStack.Screen
          name="CheckoutScreen"
          component={CheckoutScreen}
        />
        <CheckoutStack.Screen
          name="CheckoutSuccessScreen"
          component={CheckoutSuccessScreen}
        />
        <CheckoutStack.Screen
          name="CheckoutErrorScreen"
          component={CheckoutErrorScreen}
        />
      </CheckoutStack.Group>
    </CheckoutStack.Navigator>
  );
};
