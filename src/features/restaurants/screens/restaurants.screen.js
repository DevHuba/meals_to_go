import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

//Components
import { SafeArea } from "../../../components/utility/safe-area.component";
import SearchBar from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

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

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <Search>
        <SearchBar />
      </Search>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
