import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  LoginContainer,
  LoginTextInput,
  LoginButton,
} from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
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
            secure
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          <LoginButton
            icon="login"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </LoginButton>
        </Spacer>
      </LoginContainer>
    </AccountBackground>
  );
};
