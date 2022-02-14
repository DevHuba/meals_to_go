import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

export const CheckoutSuccessScreen = () => {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <Text variant="label">Success!</Text>
      </CartIconContainer>
    </SafeArea>
  );
};
