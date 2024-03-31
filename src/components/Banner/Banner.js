import React from "react";
import { Text, View, Dimensions } from "react-native";
import {
  CustomButton,
  ButtonText,
  ButtonContainer,
  DescriptionText,
  DescriptionContainer,
} from "./banner.style";
import { Image, Linking } from "react-native";
import home from "../../../assets/home.jpg";
import { useNavigation } from "@react-navigation/native";
import { TopBanner } from "../TopBanner";

export const Banner = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };
  const handleOpenURL = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.error("Cannot open URI: " + url);
      }
    } catch (error) {
      console.error("Error opening URI: " + error);
    }
  };

  const screenHeight = Dimensions.get("window").height;
  const imageWidth = screenHeight * 0.7;
  return (
    <View>
      <TopBanner />
      <Image
        source={home}
        style={{ width: imageWidth, height: screenHeight - 250, opacity: 0.9 }}
      />
      {/* <DescriptionContainer>
        <DescriptionText style={{ textAlign: "center" }}>
          SwiftIn is a streamlined mobile application designed to simplify event
          attendance management.
        </DescriptionText>
      </DescriptionContainer> */}
      <ButtonContainer>
        <CustomButton onPress={() => handleOpenURL("https://www.google.com")}>
          <ButtonText>Sign Up</ButtonText>
        </CustomButton>
        <CustomButton onPress={() => handleNavigation("Login")}>
          <ButtonText>Log In</ButtonText>
        </CustomButton>
      </ButtonContainer>
    </View>
  );
};
