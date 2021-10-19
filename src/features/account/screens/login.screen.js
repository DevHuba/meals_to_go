import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  LoginContainer,
  LoginTextInput,
  LoginButton,
  BackButton,
  Title,
  ErrorContainer,
} from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator, Colors } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <LoginContainer>
        <LoginTextInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <LoginTextInput
            label="Password"
            value={password}
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>

        {error && (
          <Spacer size="large">
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}

        <Spacer size="large">
          {!isLoading ? (
            <LoginButton
              icon="login"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </LoginButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </LoginContainer>
      <Spacer size="large">
        <BackButton
          mode="contained"
          onPress={() => {
            navigation.goBack();
          }}
        >
          Back
        </BackButton>
      </Spacer>
    </AccountBackground>
  );
};
