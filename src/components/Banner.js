import React from "react";
import { Text, View, Dimensions, TouchableOpacity } from "react-native";
import {
  Logo,
  CustomButton,
  ButtonText,
  ButtonContainer,
  LogoContainer,
  DescriptionText,
  DescriptionContainer,
} from "./banner.style";
import { Image } from "react-native";
import home from "../../assets/home.jpg";
import { useNavigation } from "@react-navigation/native";

export const Banner = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  const navigateToHome = () => {
    navigation.navigate("Homepage");
  };

  const screenHeight = Dimensions.get("window").height;
  const imageWidth = screenHeight * 0.7;
  return (
    <View>
      <TouchableOpacity onPress={navigateToHome}>
        <LogoContainer>
          <Logo>SwiftIn</Logo>
        </LogoContainer>
      </TouchableOpacity>
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
