import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";

import SearchBar from "../../../components/SearchBar";
import { RestaurantsInfo } from "../components/restaurant-info.component";

const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <SearchBar />
    </View>
    <View style={styles.list}>
      <RestaurantsInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
