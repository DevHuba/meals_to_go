import React from "react";
import styled from "styled-components/native";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";

import SearchBar from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantCard = styled.View`
  flex: 1;
  background-color: papayawhip;
  padding: ${(props) => props.theme.sizes[1]};
`;

const Search = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.inverse};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <Search>
      <SearchBar />
    </Search>
    <RestaurantCard>
      <RestaurantInfoCard />
    </RestaurantCard>
  </SafeArea>
);

const styles = StyleSheet.create({});
