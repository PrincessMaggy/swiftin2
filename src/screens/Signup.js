import React from "react";
import {  Text } from "react-native";
import { SafeAreaRender } from "../utils/SafeAreaRender";
import { TopBanner } from "../components/TopBanner";

export const Signup = () => {
  return (
      <SafeAreaRender>
          <TopBanner/>
      <Text>Signup</Text>
    </SafeAreaRender>
  );
};
