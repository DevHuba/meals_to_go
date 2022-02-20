import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Components
import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
//Contexts
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/bg_image_2.jpeg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  //Use context for logOut
  const { onLogOut, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo && (
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            )}
            {photo && <Avatar.Image size={180} source={{ uri: photo }} />}
          </TouchableOpacity>
          <Spacer position="top" size="large" />
          <Text variant="label" style={{ color: colors.brand.third }}>
            {user.email}
          </Text>
          <Spacer position="top" size="medium" />
        </AvatarContainer>

        <List.Section>
          <SettingsItem
            title="Favorites"
            description="View your favorites"
            descriptionStyle={{ color: colors.ui.disabled }}
            titleStyle={{ color: colors.brand.third }}
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" color={"red"} />
            )}
            onPress={() => navigation.navigate("Favorites")}
          />
          <SettingsItem
            title="Payments"
            titleStyle={{ color: colors.brand.third }}
            description="Payments history"
            descriptionStyle={{ color: colors.ui.disabled }}
            left={(props) => (
              <List.Icon
                {...props}
                color="black"
                icon="cash"
                color={colors.brand.third}
              />
            )}
            onPress={() => null}
          />
          <SettingsItem
            title="Places"
            titleStyle={{ color: colors.brand.third }}
            description="Places history"
            descriptionStyle={{ color: colors.ui.disabled }}
            left={(props) => (
              <List.Icon
                {...props}
                color="black"
                icon="history"
                color={colors.brand.third}
              />
            )}
            onPress={() => null}
          />

          <SettingsItem
            title="Logout"
            titleStyle={{ color: colors.brand.third }}
            left={(props) => (
              <List.Icon
                {...props}
                color="black"
                icon="door"
                color={colors.brand.third}
              />
            )}
            onPress={onLogOut}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
