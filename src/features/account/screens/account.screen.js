import React from "react";
import {
  AccountBackground,
  AccountCover,
  MainContainer,
  MainButton,
  Title,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.components";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <MainContainer>
        <MainButton
          icon="login"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </MainButton>
        <Spacer size="large" />
        <MainButton
          icon="card-account-details"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </MainButton>
      </MainContainer>
    </AccountBackground>
  );
};
