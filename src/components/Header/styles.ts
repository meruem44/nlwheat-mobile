import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px ${RFValue(18)}px;
`;

export const LogoutText = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const Button = styled(BorderlessButton)`
  margin-right: 20px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;
