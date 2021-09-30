import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { Search } from "../components/search.component";

//Contexts
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  return (
    <>
      <Search />
      <Map>
        {restaurants.map((restaurant) => {
          return null;
        })}
      </Map>
    </>
  );
};
