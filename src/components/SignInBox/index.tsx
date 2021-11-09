import React from "react";
import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/auth";

import Button from "../../components/Button";

import { Container } from "./styles";

const SignInBox: React.FC = () => {
  const { colors } = useTheme();
  const { signIn, isSignIn } = useAuth();

  return (
    <Container>
      <Button
        onPress={signIn}
        backgroundColor={colors.YELLOW}
        color={colors.BLACK_PRIMARY}
        title="ENTRAR COM O GITHUB"
        icon="github"
        isLoading={isSignIn}
      />
    </Container>
  );
};

export { SignInBox };
