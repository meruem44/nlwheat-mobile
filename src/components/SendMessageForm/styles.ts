import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(170)}px;
  background-color: ${({ theme }) => theme.colors.BLACK_TERTIARY};
  padding: ${RFValue(16)}px ${RFValue(24)}px
    ${({ theme }) => theme.metrics.marginBottom}${+RFValue(16)}px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: ${RFValue(88)}px;
  text-align-vertical: top;
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;
