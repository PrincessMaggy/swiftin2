import React from "react";
import { SafeAreaView, Platform, StatusBar } from "react-native";

export const SafeAreaRender = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

