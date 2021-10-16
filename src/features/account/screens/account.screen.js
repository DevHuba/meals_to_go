import React from "react";
import { Button } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";

export const AccountScreen = ({ route, navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Button
          icon="login"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Login
        </Button>
      </AccountContainer>
    </AccountBackground>
  );
};
