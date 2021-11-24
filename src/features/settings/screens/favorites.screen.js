import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, FlatList } from "react-native";

//Components
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

//Contexts
import { FavoritesContext } from "../../../services/favorites/favorites.context";

const FavoritesList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <FavoritesList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetailScreen", {
                  restaurant: item,
                })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      ></FavoritesList>
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text variant="label">You dont have favorites jet.</Text>
    </NoFavoritesArea>
  );
};
