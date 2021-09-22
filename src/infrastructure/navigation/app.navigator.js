import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Constants
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Tab = createBottomTabNavigator();

//Components
import { SafeArea } from "../../components/utility/safe-area.component";

//Screens
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

//Icons
import { Ionicons } from "@expo/vector-icons";

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

function MapScreen() {
  return (
    <SafeArea>
      <Text>MAP!</Text>
    </SafeArea>
  );
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
