import React, { useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CreditCardComponent } from "../components/credit-card.component";
import { Spacer } from "../../../components/spacer/spacer.components";
import { CartIconContainer, CartIcon } from "../components/checkout.styles";

//Contexts
import { CartContext } from "../../../services/cart/cart.context";

export const CheckoutScreen = () => {
  const { cart, restaurant } = useContext(CartContext);
  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Spacer>
            <Text>Your cart is empty!</Text>
          </Spacer>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <Text variant="label">{JSON.stringify(cart)}</Text>
      <Text variant="label">{JSON.stringify(restaurant)}</Text>
      <CreditCardComponent />
    </SafeArea>
  );
};
