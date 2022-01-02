import camelize from "camelize";
import { host, isMock } from "../../utils/env";

export const restautantsRequest = (location) => {
  //TODO : Add "&mock=true" after searchTerm for using of mock data
  const url = `${host}/placesNearby?location=${location}&mock=${isMock}`;
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch(console.error);
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResults);
};
