import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};
export const locationTransform = (result) => {
  const formatedResponse = camelize(result);
  //Here we can take object from inside of another object in JSON format data.
  const { geometry = {} } = formatedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
