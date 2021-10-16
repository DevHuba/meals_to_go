import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AccountBackground } from "../components/account.styles";

export const LoginScreen = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <AccountBackground resizeMode="cover">
        <Text style={styles.text}>Login Screen</Text>
      </AccountBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: "white",
  },
});
