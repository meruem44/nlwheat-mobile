import React, { useState, useCallback } from "react";
import { Alert, Keyboard } from "react-native";
import { useTheme } from "styled-components";
import { api } from "../../services/api";

import Button from "../Button";

import { Container, Input } from "./styles";

const SendMessageForm: React.FC = () => {
  const { colors } = useTheme();

  const [message, setMessage] = useState("");
  const [sendMessageLoading, setSendMessageLoading] = useState(false);

  const handleMessageSubmit = useCallback(async () => {
    const messageFormate = message.trim();

    if (!messageFormate) {
      Alert.alert("Ops", "É necessário tem alguma mensagem");
      return;
    }

    setSendMessageLoading(true);

    try {
      await api.post("/messages", {
        message: messageFormate,
      });

      setMessage("");
      Keyboard.dismiss();
    } catch (error) {
      alert(error);
    } finally {
      setSendMessageLoading(false);
    }
  }, [message]);

  return (
    <Container>
      <Input
        value={message}
        onChangeText={setMessage}
        placeholder="Qual sua expectativa para o evento?"
        keyboardAppearance="dark"
        placeholderTextColor={colors.GRAY_PRIMARY}
        multiline
        maxLength={140}
        editable={!sendMessageLoading}
      />

      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={colors.PINK}
        color={colors.WHITE}
        isLoading={sendMessageLoading}
        onPress={handleMessageSubmit}
      />
    </Container>
  );
};

export { SendMessageForm };
