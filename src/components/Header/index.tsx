import React from "react";
import { useAuth } from "../../hooks/auth";

import LogoSvg from "../../assets/logo.svg";
import { UserPhoto } from "../UserPhoto";

import { Container, LogoutText, Button, Content } from "./styles";

const Header: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <LogoSvg />

      <Content>
        {user && (
          <Button onPress={signOut}>
            <LogoutText>Sair</LogoutText>
          </Button>
        )}
        <UserPhoto imageUri={user?.avatar_url} />
      </Content>
    </Container>
  );
};

export { Header };
