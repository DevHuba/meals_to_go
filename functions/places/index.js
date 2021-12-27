const { mocks, addMockImage } = require("./mock");
const functions = require("firebase-functions");

const addGoogleImage = (restaurant) => {
  console.log("ADD_GOOGLE_IMAGE_PASED_PARAM : ", restaurant);
  const ref = restaurant.photos[0].photo_reference;
  if (!ref) {
    restaurant.photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ];
    return restaurant;
  }
  restaurant.photos = [
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
      functions.config().google.key
    }`,
  ];

  return restaurant;
};

module.exports.placesRequest = (req, res, client) => {
  const { location, mock } = req.query;

  if (mock === "true") {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
      return res.json(data);
    }
    res.json(data);
  }

  client
    .placesNearby({
      params: {
        location,
        radius: 1500,
        type: "restaurant",
        key: functions.config().google.key,
      },
      timeout: 1000,
    })
    .then((resp) => {
      console.log("RESPONSE : ", resp);
      resp.data.results = resp.data.results.map(addGoogleImage);
      const result = resp.data;
      console.log("PLACES AFTER FUNCTION : ", result);
      return res.json(result);
    })
    .catch((e) => {
      res.status(400);
      console.log("ERROR : ", e);
      return res.send(e);
    });
};
