import styled from "styled-components/native";
import { Text, View, TouchableOpacity } from "react-native";

export const LogoContainer = styled(View)`
  background-color: #3442c0;
  width: auto;
`;

export const Logo = styled(Text)`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  letter-spacing: 2px;
  padding: 10px;
  background-color: #3442c0;
`;

export const CustomButton = styled(TouchableOpacity)`
  width: 150px;
  height: 40px;
  border-width: 1px;
  border-color: #3442c0;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #3442c0;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonContainer = styled(View)`
  padding: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
`;

export const DescriptionContainer = styled(View)`
  position: absolute;
  top: 40%;
  width: 100%;
  padding:10px
`;

export const DescriptionText = styled.Text`
  color: white;
  font-size: 25px;
  text-align: center;
`;
