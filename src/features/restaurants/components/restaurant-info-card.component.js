import React from "react";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

//Components
import { Spacer } from "../../../components/spacer/spacer.components.js";
import { Text } from "../../../components/typography/text.component.js";

//Icons SVG
import star from "../../../../assets/star.js";
import openIcon from "../../../../assets/open.js";
import closedIcon from "../../../../assets/closed.js";

//Styles
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Section,
  Temporarily,
  SectionEnd,
} from "./restaurant-info-card.styles";

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
        <Text variant="label">{name}</Text>
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
                  <Text variant="error">TEMPORARILY</Text>
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
