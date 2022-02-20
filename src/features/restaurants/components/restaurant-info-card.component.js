import React from "react";
import { SvgXml } from "react-native-svg";

//Components
import { Spacer } from "../../../components/spacer/spacer.components.js";
import { Text } from "../../../components/typography/text.component.js";
import { Favorite } from "../../../components/favorites/favorites.component";

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
  Icon,
  Rating,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  let {
    name = "Mock name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.2foodtrippers.com/wp-content/uploads/2017/05/Tallinn-Food-Guide-Lieb-Resto-Soup.jpg.webp",
    ],
    address = "Mock address",
    isOpenNow,
    rating = 3,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  //Fix rating range
  if (rating >= 5) {
    rating = 5;
  } else if (rating <= 0) {
    rating = 1;
  } else {
    rating;
  }

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard elevation={2}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                //iteration of unique key using index...Not the best practice...
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
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
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
