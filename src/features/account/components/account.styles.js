import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/1.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Title = styled(Text)`
  font-size: 60px;
  color: black;
`;

export const BackButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;

//Main screen style
export const MainContainer = styled.View`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const MainButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[1]};
`;

//Login screen style
export const LoginContainer = styled.View`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
`;

export const LoginButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;

export const LoginTextInput = styled(TextInput)`
  width: 300px;
`;

//Register screen style
export const RegisterContainer = styled.View`
  height: 39%;
  width: 70%;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const RegisterButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;
