const fbFunctionsLocaleURLPart = "/mealstogo-daf81/us-central1";
const liveHost = "https://us-central1-mealstogo-daf81.cloudfunctions.net";
//change ngrok link every time you restart it
const localHost = `https://7df0-94-246-246-16.ngrok.io${fbFunctionsLocaleURLPart}`;
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? localHost : liveHost;
