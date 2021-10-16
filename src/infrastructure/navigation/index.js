import React, { useContext } from "react";
import { View, Text } from "react-native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return isAuthenticated ? (
    <AppNavigator />
  ) : (
    //TODO : Delete inline styles !!
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center" }}>Authentication Problem</Text>
    </View>
  );
};
