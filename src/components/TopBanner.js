import React from "react";
import { View, TouchableOpacity } from "react-native";
import { LogoContainer, Logo } from "./Banner/banner.style";
import { useNavigation } from "@react-navigation/native";

export const TopBanner = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("Homepage");
  };
  return (
    <View>
      <TouchableOpacity onPress={navigateToHome}>
        <LogoContainer>
          <Logo>SwiftIn</Logo>
        </LogoContainer>
      </TouchableOpacity>
    </View>
  );
};
