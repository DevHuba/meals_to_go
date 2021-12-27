const { locations: locationsMock } = require("./geocode.mock");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (req, res, client) => {
  const { city, mock } = req.query;

  console.log("GOOGLE FUNCTIONS KEYS : ", functions.config());
  console.log("MOCK : ", mock);

  if (mock === "true") {
    // Query mock city search
    const locationMockLower = locationsMock[city.toLowerCase()];
    const result = res.json(locationMockLower);
    return result;
    // return response.send(locationMock);
  }
  client
    .geocode({
      params: {
        address: city,
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((resp) => {
      return res.json(resp.data);
    })
    .catch((e) => {
      res.status(400);
      return res.send("geo_code_error", e.response.data.error_message);
    });
};
