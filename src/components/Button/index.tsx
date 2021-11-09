import React from "react";
import { ColorValue, ActivityIndicator } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";

import { Container, TextButton } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

interface ButtonProps extends RectButtonProps {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>["name"];
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  color,
  backgroundColor,
  icon,
  isLoading = false,
  ...rest
}) => {
  return (
    <Container enabled={!isLoading} {...rest} style={{ backgroundColor }}>
      {isLoading && <ActivityIndicator color={color} />}

      {!isLoading && (
        <>
          {icon && (
            <AntDesign
              size={RFValue(24)}
              name={icon}
              style={{ marginRight: RFValue(10) }}
            />
          )}

          <TextButton style={{ color }}>{title}</TextButton>
        </>
      )}
    </Container>
  );
};

export default Button;
