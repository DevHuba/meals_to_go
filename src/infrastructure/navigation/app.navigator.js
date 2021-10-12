import React from "react";
import { Text } from "react-native";
//Icons
import { Ionicons } from "@expo/vector-icons";
//Components
import { SafeArea } from "../../components/utility/safe-area.component";
//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//Screens
import { RestaurantsNavigator } from "./restaurants.navigation";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

//Constants
const TAB_ICON = {
  Restaurants: "md-restaurant",
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

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>SETTINGS!</Text>
    </SafeArea>
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
