import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

import { FavoritesContext } from "../../services/favorites/favorites.context";

const FavoriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favorite = ({ navigation }) => {
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  return (
    <FavoriteButton>
      <AntDesign name="heart" size={24} color="red" />
    </FavoriteButton>
  );
};

//Start of good git three in remote
