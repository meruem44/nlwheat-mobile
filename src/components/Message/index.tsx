import React from "react";

import { UserPhoto } from "../UserPhoto";

import { Container, UserName, TextMessage, Info } from "./styles";

export type MessageProps = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

type Props = {
  data: MessageProps;
};

const Message: React.FC<Props> = ({ data }) => {
  return (
    <Container
      from={{
        translateY: -50,
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
      transition={{
        type: "timing",
        duration: 700,
      }}
    >
      <TextMessage>{data.text}</TextMessage>

      <Info>
        <UserPhoto sizes="SMALL" imageUri={data.user.avatar_url} />
        <UserName>{data.user.name}</UserName>
      </Info>
    </Container>
  );
};

export { Message };
