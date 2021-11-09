import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: RFValue(130),
    paddingBottom: RFValue(184),
  },
})`
  flex: 1;
  padding: 0px ${RFValue(20)}px;
`;
