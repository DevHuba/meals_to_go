import React, { useState, useContext } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
//Styles
import { OrderButton } from "../components/restaurant-info-card.styles";
//Components
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.components";
//Contexts
import { CartContext } from "../../../services/cart/cart.context";
import { colors } from "../../../infrastructure/theme/colors";

export const RestaurantDetailScreen = ({ route, navigation }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          titleStyle={{ color: colors.brand.primary }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="white-balance-sunny"
              color={colors.brand.primary}
            />
          )}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Breakfast Burrito" />
          <List.Item title="Belgian Style Waffles" />
          <List.Item title="Cinnamon Rolls" />
          <List.Item title="Bagel with Cream Cheese" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          titleStyle={{ color: colors.brand.primary }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="hamburger"
              color={colors.brand.primary}
            />
          )}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Buddha Bowl" />
          <List.Item title="Burrito Bowl" />
          <List.Item title="Chicken and Asparagus Lemon Stir-Fry" />
          <List.Item title="Kale, Spinach, and Pear Smoothie" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          titleStyle={{ color: colors.brand.primary }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="food-variant"
              color={colors.brand.primary}
            />
          )}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Hard tacos or tostadas" />
          <List.Item title="Huevos rancheros" />
          <List.Item title="Stir fry" />
          <List.Item title="Meatballs and rice" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          titleStyle={{ color: colors.brand.primary }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="bottle-wine"
              color={colors.brand.primary}
            />
          )}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Sprite" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          mode="contained"
          icon="cash-register"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order special only 12.99
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};

//Price in onPress is figured by Stripe. Requires that format for right rounding.
