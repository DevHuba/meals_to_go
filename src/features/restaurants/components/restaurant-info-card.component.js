import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

//Components
import { Spacer } from "../../../components/spacer/spacer.components.js";

//Icon SVG
import star from "../../../../assets/star.js";
import openIcon from "../../../../assets/open.js";
import closedIcon from "../../../../assets/closed.js";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const Section = styled.View`
  flex-direction: row;
`;

const Temporarily = styled.Text`
  margin-right: ${(props) => props.theme.space[3]};
  color: green;
`;

const SectionEnd = styled.View`
  flex-direction: row;
  margin-left: auto;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  let {
    name = "Some Restorant",
    icon,
    photos = [
      "https://www.2foodtrippers.com/wp-content/uploads/2017/05/Tallinn-Food-Guide-Lieb-Resto-Soup.jpg.webp",
    ],
    address = "test address",
    isOpenNow = false,
    rating = 3,
    isClosedTemporarily = true,
  } = restaurant;

  //Fix rating range
  if (rating >= 5) {
    console.log(rating);
    rating = 5;
  } else if (rating <= 0) {
    rating = 1;
  } else {
    rating;
  }

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            <Spacer position="right" size="large">
              {isClosedTemporarily && (
                <>
                  <Temporarily>TEMPORARILY</Temporarily>
                </>
              )}
            </Spacer>
            <Spacer position="left" size="large">
              {isOpenNow ? (
                <SvgXml xml={openIcon} width={20} height={20} />
              ) : (
                <SvgXml xml={closedIcon} width={20} height={20} />
              )}
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
