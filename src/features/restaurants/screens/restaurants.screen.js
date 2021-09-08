import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";

//Components
import { SafeArea } from "../../../components/utility/safe-area.component";
import SearchBar from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

//Styled components
const Search = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.inverse};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => (
  <SafeArea>
    <Search>
      <SearchBar />
    </Search>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name.toString()}
    />
  </SafeArea>
);
