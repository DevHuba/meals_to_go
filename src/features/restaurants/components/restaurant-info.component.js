import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

export const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restorant",
    icon,
    photos = ["https://www.flickr.com/photos/dlee13/32249983602/;"],
    address = "test address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Title />
      <Card.Content>
        <Title>Card title 2</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({});
