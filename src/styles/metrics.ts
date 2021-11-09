import { Dimensions, StatusBar } from "react-native";
import {
  getBottomSpace,
  isIphoneX,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

const isIphone = isIphoneX();

const { width, height } = Dimensions.get("screen");
const marginTop = isIphone ? getStatusBarHeight() : StatusBar.currentHeight;
const marginBottom = isIphone ? getBottomSpace : 0;

export const metrics = {
  width,
  height,
  marginTop,
  marginBottom,
};
