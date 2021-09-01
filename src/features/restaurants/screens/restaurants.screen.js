import React from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView, FlatList } from "react-native";

import SearchBar from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantCard = styled.View`
  flex: 1;
  background-color: white;
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
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </RestaurantCard>
  </SafeArea>
);
