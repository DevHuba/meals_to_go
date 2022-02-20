import styled from "styled-components/native";
import { Card, Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 80%;
  align-self: center;
`;

export const RestaurantCard = styled(Card)`
  width: 95%;
  align-self: center;
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

export const Section = styled.View`
  flex-direction: row;
`;

export const Temporarily = styled.Text`
  margin-right: ${(props) => props.theme.space[3]};
  color: green;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  margin-left: auto;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
