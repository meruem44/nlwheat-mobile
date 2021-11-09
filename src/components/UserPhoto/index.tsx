import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

import avatarImg from "../../assets/avatar.png";

import { Image } from "./styles";

type UserPhotoProps = {
  imageUri: string | undefined;
  sizes?: "SMALL" | "NORMAL";
};

const SIZES = {
  SMALL: {
    container: RFValue(32),
    photo: RFValue(28),
  },
  NORMAL: {
    container: RFValue(48),
    photo: RFValue(42),
  },
};

const AVATAR_DEFAULT = Image.resolveAssetSource(avatarImg).uri;

const UserPhoto: React.FC<UserPhotoProps> = ({
  imageUri,
  sizes = "NORMAL",
}) => {
  const { colors } = useTheme();
  const { container, photo } = SIZES[sizes];

  return (
    <LinearGradient
      colors={[colors.PINK, colors.YELLOW]}
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
          width: container,
          height: container,
          borderRadius: container / 2,
        },
      ]}
      start={{ x: 0.9, y: 1 }}
    >
      <Image
        style={{
          width: photo,
          height: photo,
          borderRadius: photo / 2,
        }}
        source={{ uri: imageUri || AVATAR_DEFAULT }}
      />
    </LinearGradient>
  );
};

export { UserPhoto };
