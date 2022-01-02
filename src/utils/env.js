import { Platform } from "react-native";

const fbFunctionsLocaleURLPart = "/mealstogo-daf81/us-central1";
const liveHost = "https://us-central1-mealstogo-daf81.cloudfunctions.net";
// change ngrok link every time you restart it
// const localHostNgrok = `https://405b-94-246-246-16.ngrok.io${fbFunctionsLocaleURLPart}`;
const localHost = `http://localhost:5001${fbFunctionsLocaleURLPart}`;
export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
// Change isMock for mock data or data from firebase functions
export const isMock = true;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
