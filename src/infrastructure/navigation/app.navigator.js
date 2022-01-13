import React from "react";
//Icons
import { Ionicons } from "@expo/vector-icons";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Screens
import { RestaurantsNavigator } from "./restaurants.navigation";
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { CheckoutScreen } from "../../features/checkout/screens/checkout.screen";
//Contexts
import { CartContextProvider } from "../../services/cart/cart.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";

const Tab = createBottomTabNavigator();

//Constants
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Checkout: "md-cart",
  Map: "md-map",
  Settings: "md-settings",
};

//Icons logic
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    headerShown: false,
  };
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <CartContextProvider>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen
                  name="Restaurants"
                  component={RestaurantsNavigator}
                />
                <Tab.Screen name="Checkout" component={CheckoutScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsNavigator} />
              </Tab.Navigator>
            </CartContextProvider>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </NavigationContainer>
  );
};
