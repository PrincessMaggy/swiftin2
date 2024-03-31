import { TextInput, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

export const FormContain = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InfoText = styled(Text)`
  color: red;
  font-size: 15px;
  text-align: center;
  padding: 30px;
`;

export const LoginLabel = styled.Text`
  margin: 0;
  color: gray;
  text-align: left;
  font-weight: bold;
  width: 70%;
`;

export const InputField = styled(TextInput)`
  height: 40px;
  margin: 20px;
  padding: 10px;
  border-width: 1px;
  border-color: #3442c0;
  border-radius: 5px;
  width: 70%;
`;
export const ForgotPasswordText = styled.Text`
  margin-top: 10px;
  color: #3442c0;
  text-decoration-line: underline;
  text-align: center;
`;

export const LoginButton = styled(TouchableOpacity)`
  width: 70%;
  height: 40px;
  border-width: 1px;
  background-color: #3442c0;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const LoginText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
