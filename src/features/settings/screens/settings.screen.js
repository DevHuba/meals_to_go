import React, { useContext } from "react";
import styled from "styled-components/native";
import { List } from "react-native-paper";
//Components
import { SafeArea } from "../../../components/utility/safe-area.component";
//Contexts
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  //Use context for logOut
  const { onLogOut } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogOut}
        />
      </List.Section>
    </SafeArea>
  );
};
