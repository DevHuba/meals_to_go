import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CreditCardComponent } from "../components/credit-card.component";
import { Spacer } from "../../../components/spacer/spacer.components";

//Styles
import {
  CartIconContainer,
  CartIcon,
  NameInput,
} from "../components/checkout.styles";

//Contexts
import { CartContext } from "../../../services/cart/cart.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum } = useContext(CartContext);
  const [name, setName] = useState("");

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
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="large">
          <Text>Your Order</Text>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total : {sum / 100}</Text>
        </Spacer>
        <Spacer>
          <NameInput
            label="Name"
            value={name}
            onChangeText={(t) => {
              setName(t);
            }}
          />
        </Spacer>
        <Spacer position="top" size="medium">
          {name.length > 0 && <CreditCardComponent name={name} />}
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
};
