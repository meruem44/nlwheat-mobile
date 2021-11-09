import React from "react";
import { StatusBar } from "react-native";
import { AuthProvider } from "./hooks/auth";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { theme } from "./styles/theme";

const Application: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.BLACK_SECONDARY}
        translucent
      />
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
};

export { Application };
