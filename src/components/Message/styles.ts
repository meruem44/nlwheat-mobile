import styled from "styled-components/native";
import { MotiView } from "moti";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(MotiView)`
  width: 100%;
  margin-bottom: ${RFValue(36)}px;
`;

export const Info = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.WHITE};
  margin-left: ${RFValue(16)}px;
`;

export const TextMessage = styled.Text`
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.WHITE};
  margin-bottom: ${RFValue(10)}px;
`;
