import React from "react";
import { Text, View, Dimensions, Button } from "react-native";
import {
  Logo,
  CustomButton,
  ButtonText,
  ButtonContainer,
  LogoContainer,
  DescriptionText,
} from "./banner.style";
import { Image } from "react-native";
import home from "../../assets/home.jpg";
import { useNavigation } from "@react-navigation/native";

export const Banner = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  const screenHeight = Dimensions.get("window").height;
  const imageWidth = screenHeight * 0.7;
  return (
    <View>
      <LogoContainer>
        <Logo>SwiftIn</Logo>
      </LogoContainer>
      <Image
        source={home}
        style={{ width: imageWidth, height: screenHeight - 300 }}
      />
      {/* <DescriptionText>
        SwiftIn is a streamlined mobile application designed to simplify event
        attendance management.
      </DescriptionText> */}
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
