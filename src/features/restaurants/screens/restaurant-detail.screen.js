import React, { useState } from "react";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      {/* <RestaurantInfoCard restaurant={restaurant} /> */}
      <List.Section title="Accordions">
        <List.Accordion
          title="1"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="1-1 " />
          <List.Item title="1-2" />
        </List.Accordion>
        <List.Accordion
          title="2"
          left={(props) => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="2-1" />
          <List.Item title="2-2" />
        </List.Accordion>
      </List.Section>
    </SafeArea>
  );
};

// breakfast ,lunch, dinner, drinks
