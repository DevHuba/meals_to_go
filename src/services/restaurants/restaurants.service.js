import { mocks } from "./mock/index.js";
import camelize from "camelize";

export const restautantsRequest = (location = "41.878113,-87.629799") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.buisness_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};

restautantsRequest()
  .then(restaurantTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });