import {totalSize} from 'react-native-dimension';

const fontFamily = {
  appTextLight: 'DroidSans', // 300
  appTextRegular: 'DroidSans', // 400
  appTextMedium: 'DroidSans-Bold', // 500
  appTextSemiBold: 'DroidSans-Bold', // 600
  appTextBold: 'DroidSans-Bold', // 700
};

const fontSize = {
  h1: totalSize(4.5),
  h2: totalSize(4),
  h3: totalSize(3.5),
  h4: totalSize(3),
  h5: totalSize(2.5),
  h6: totalSize(2),
  input: totalSize(1.75),
  large: totalSize(2),
  medium: totalSize(1.75),
  regular: totalSize(1.5),
  small: totalSize(1.25),
  tiny: totalSize(1),
};
export {fontSize, fontFamily};
