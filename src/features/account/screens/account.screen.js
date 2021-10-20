import React from "react";
import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountCover,
  MainContainer,
  MainButton,
  Title,
  AnimationWrapper,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.components";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
      </AnimationWrapper>

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
