import React from "react";
import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SendMessageForm } from "../../components/SendMessageForm";
import { SignInBox } from "../../components/SignInBox";

import { Container } from "./styles";

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Header />
      <MessageList />

      {user ? <SendMessageForm /> : <SignInBox />}
    </Container>
  );
};

export { Home };
