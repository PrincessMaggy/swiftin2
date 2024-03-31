import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaRender } from "../utils/SafeAreaRender";
import { TopBanner } from "../components/TopBanner";
import {
  InputField,
  ForgotPasswordText,
  LoginText,
  LoginButton,
  InfoText,
  FormContain,
  LoginLabel,
} from "../components/LogIn/login.style";

export const Login = () => {
  const [text, onChangeText] = React.useState("abc@gmail.com");
  const handleButtonPress = () => {
    console.log("Login credentials submitted:", text);
  };
  return (
    <SafeAreaRender>
      <TopBanner />

      <FormContain>
        <LoginLabel>Enter Email Address:</LoginLabel>

        <InputField onChangeText={onChangeText} value={text} />
        <LoginButton onPress={handleButtonPress}>
          <LoginText>Submit</LoginText>
        </LoginButton>
        <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
      </FormContain>
      <InfoText>
       N/B: Please log in with the email that was used to register for the event.
      </InfoText>
    </SafeAreaRender>
  );
};
