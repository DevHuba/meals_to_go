import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
  // variable for local development
  // const isAuthenticated = true;

  // TODO : Uncomment that line for production...
  const { isAuthenticated } = useContext(AuthenticationContext);

  return isAuthenticated ? <AppNavigator /> : <AccountNavigator />;
};
