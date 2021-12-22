const fbFunctionsLocaleURLPart = "/mealstogo-49114/us-central1";
const liveHost = "https://us-central1-mealstogo-49114.cloudfunctions.net";
const localHost = `http://8720-94-246-246-16.ngrok.io${fbFunctionsLocaleURLPart}`;
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? localHost : liveHost;
