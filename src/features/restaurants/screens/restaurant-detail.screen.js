import React, { useState, useContext } from "react";
import { List, Divider } from "react-native-paper";
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
          titleStyle={{
            color: breakfastExpanded
              ? colors.brand.primary
              : colors.ui.secondary,
          }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="white-balance-sunny"
              color={
                breakfastExpanded ? colors.brand.primary : colors.ui.secondary
              }
            />
          )}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item
            title="Breakfast Burrito"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Belgian Style Waffles"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Cinnamon Rolls"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Bagel with Cream Cheese"
            titleStyle={{ color: colors.brand.secondary }}
          />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          titleStyle={{
            color: lunchExpanded ? colors.brand.primary : colors.ui.secondary,
          }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="hamburger"
              color={lunchExpanded ? colors.brand.primary : colors.ui.secondary}
            />
          )}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item
            title="Buddha Bowl"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Burrito Bowl"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Chicken and Asparagus Lemon Stir-Fry"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Kale, Spinach, and Pear Smoothie"
            titleStyle={{ color: colors.brand.secondary }}
          />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          titleStyle={{
            color: dinnerExpanded ? colors.brand.primary : colors.ui.secondary,
          }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="food-variant"
              color={
                dinnerExpanded ? colors.brand.primary : colors.ui.secondary
              }
            />
          )}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item
            title="Hard tacos or tostadas"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Huevos rancheros"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Stir fry"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Meatballs and rice"
            titleStyle={{ color: colors.brand.secondary }}
          />
        </List.Accordion>
        <Divider />

        <List.Accordion
          title="Drinks"
          titleStyle={{
            color: drinksExpanded ? colors.brand.primary : colors.ui.secondary,
          }}
          left={(props) => (
            <List.Icon
              {...props}
              icon="bottle-wine"
              color={
                drinksExpanded ? colors.brand.primary : colors.ui.secondary
              }
            />
          )}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item
            title="Coffee"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Tea"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Sprite"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Coke"
            titleStyle={{ color: colors.brand.secondary }}
          />
          <Divider />
          <List.Item
            title="Fanta"
            titleStyle={{ color: colors.brand.secondary }}
          />
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
