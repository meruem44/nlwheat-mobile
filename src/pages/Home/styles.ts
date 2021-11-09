import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: ${({ theme }) => theme.metrics.marginTop};
  background-color: ${({ theme }) => theme.colors.BLACK_SECONDARY};
`;
