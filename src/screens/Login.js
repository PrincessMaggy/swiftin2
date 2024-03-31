import React from "react";
import { Text } from "react-native";
import { SafeAreaRender } from "../utils/SafeAreaRender";
import { TopBanner } from "../components/TopBanner";

export const Login = () => {
  return (
    <SafeAreaRender>
      <TopBanner />
      <Text>Text</Text>
    </SafeAreaRender>
  );
};
