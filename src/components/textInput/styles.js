import {StyleSheet} from 'react-native';
import {height, width, totalSize} from 'react-native-dimension';
import {colors, sizes} from '../../constants';
export const styles = StyleSheet.create({
  textInputBorderedContainer: {
    height: height(6.6),
    borderRadius: totalSize(1.8),
    backgroundColor: colors.white,
    width: width(92),
    justifyContent: 'center',
  },
  textInputSearch: {
    // marginHorizontal: width(5),
    borderRadius: 0,
    borderWidth: 0,
    backgroundColor: colors.bgColor1,
    borderRadius: 8,
    height: height(5),
    // paddingStart: 10,
    // borderWidth: 1,
    // borderColor: colors.appBorder2
  },
});
