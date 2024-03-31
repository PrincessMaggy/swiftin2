import React from "react";
import { Text, View, Dimensions } from "react-native";
import {
  CustomButton,
  ButtonText,
  ButtonContainer,
  DescriptionText,
  DescriptionContainer,
} from "./banner.style";
import { Image } from "react-native";
import home from '../../../assets/home.jpg'
import { useNavigation } from "@react-navigation/native";
import { TopBanner } from "../TopBanner";

export const Banner = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
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
        <CustomButton onPress={() => handleNavigation("Signup")}>
          <ButtonText>Sign Up</ButtonText>
        </CustomButton>
        <CustomButton onPress={() => handleNavigation("Login")}>
          <ButtonText>Log In</ButtonText>
        </CustomButton>
      </ButtonContainer>
    </View>
  );
};
