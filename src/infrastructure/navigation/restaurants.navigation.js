import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Group
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <RestaurantStack.Screen
          name="RestaurantsScreen"
          component={RestaurantsScreen}
        />
        <RestaurantStack.Screen
          name="RestaurantDetailScreen"
          component={RestaurantDetailScreen}
        />
      </RestaurantStack.Group>
    </RestaurantStack.Navigator>
  );
};
