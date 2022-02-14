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
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../components/checkout.styles";

//Contexts
import { CartContext } from "../../../services/cart/cart.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

//Services
import { payRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const onPay = () => {
    setLoading(true);
    if (!card || !card.id) {
      navigation.navigate("CheckoutErrorScreen", {
        error: "Please fill in a valid credit card",
      });
      setLoading(false);
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccessScreen");
      })
      .catch((err) => {
        setLoading(false);
        navigation.navigate("CheckoutErrorScreen", {
          error: err,
        });
      });
  };

  // Empty cart
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
      {isLoading && <PaymentProcessing />}
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
          {name.length > 0 && (
            <CreditCardComponent
              name={name}
              onSuccess={setCard}
              onError={() =>
                navigation.navigate("CheckoutErrorScreen", {
                  error: "Something went wrong processing your credit card",
                })
              }
            />
          )}
        </Spacer>
        <Spacer position="top" size="xxl" />
        <PayButton
          disabled={isLoading}
          icon="account-check"
          mode="contained"
          onPress={onPay}
        >
          Pay
        </PayButton>
        <Spacer position="top" size="large" />
        <ClearButton
          disabled={isLoading}
          icon="cart-off"
          mode="contained"
          onPress={clearCart}
        >
          Clear cart
        </ClearButton>
      </ScrollView>
    </SafeArea>
  );
};
