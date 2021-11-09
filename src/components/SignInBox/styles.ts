import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(48)}px;
  align-items: center;
  justify-content: center;
  padding: 0px ${RFValue(20)}px ${({ theme }) => theme.metrics.marginBottom}${+RFValue(32)}px;
`;
