import React, { useContext } from "react";
import { List } from "react-native-paper";
//Components
import { SafeArea } from "../../../components/utility/safe-area.component";
//Contexts
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  //Use context for logOut
  const { onLogOut } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogOut}
        />
        <List.Item />
      </List.Section>
    </SafeArea>
  );
};
