import React from "react";
import {  View } from "react-native";
import { Banner } from "../components/Banner";
import { SafeAreaRender } from "../utils/SafeAreaRender";

export const Homepage = () => {
  return (
    <SafeAreaRender>
      <View>
        <Banner />
      </View>
    </SafeAreaRender>
  );
};
