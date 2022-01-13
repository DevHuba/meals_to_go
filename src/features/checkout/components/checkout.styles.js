import styled from "styled-components/native";
import { Avatar } from "react-native-paper";

export const CartIconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 130,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;
