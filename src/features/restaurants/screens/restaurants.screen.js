import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, View } from "react-native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";

//Components
import { SafeArea } from "../../../components/utility/safe-area.component";
import SearchBar from "../../../components/SearchBar";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

//Styled components
const Search = styled.View`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.inverse};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const IndicatorView = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
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
      {isLoading && (
        <IndicatorView>
          <Loading size={50} animation={true} color="tomato" />
        </IndicatorView>
      )}
      <Search />
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
