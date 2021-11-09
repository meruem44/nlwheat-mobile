import React, { useState, useEffect, useCallback } from "react";
import { api } from "../../services/api";
import { io } from "socket.io-client";

import { Message, MessageProps } from "../Message";

import { MESSAGES_EXAMPLE } from "../../utils/messages";

import { Container } from "./styles";

let messagesQueue: MessageProps[] = [];

const socket = io(String(api.defaults.baseURL));
socket.on("new_message", (newMessage) => {
  messagesQueue.push(newMessage);
  console.log(newMessage);
});

const MessageList: React.FC = () => {
  const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);

  const loadLast3Messages = useCallback(async () => {
    try {
      const messagesResponse = await api.get<MessageProps[]>("/messages/last3");
      console.log(messagesResponse.data);
      setCurrentMessages(messagesResponse.data);
    } catch (error) {
      alert(error);
    }
  }, []);

  useEffect(() => {
    loadLast3Messages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setCurrentMessages((prevStates) => [messagesQueue[0], ...prevStates]);
        messagesQueue.shift();
      }
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container keyboardShouldPersistTaps="never">
      {currentMessages.map((message) => (
        <Message data={message} key={message.id} />
      ))}
    </Container>
  );
};

export { MessageList };
