import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  View,
  ActivityIndicator,
} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';
import {RowWrapperBasic, Wrapper} from '../wrappers';
import {Spacer} from '../spacers';
import {useState} from 'react';
import {useRef} from 'react';
import {colors, fontFamily} from '../../constants';
import {appStyles} from '../../utilities';
import {MediumText, RegularText} from '../text';

export const ButtonBorderd = ({
  text = '',
  onPress,
  bgColor,
  background,
  icon,
  textColor,
  style,
  isLoading,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isLoading}
      style={[
        styles.buttonBorder,
        {
          backgroundColor: bgColor ?? colors.appButtonColor3,
          borderColor: background ?? colors.appBorderColor1,
        },
        style,
      ]}
      onPress={onPress}>
      {icon ? (
        <RowWrapperBasic style={{flex: 1, width: '100%'}}>
          <Spacer isSmall horizontal />
          <RegularText
            style={[
              styles.borderdButtonText,
              {
                color: textColor ?? colors.appTextColor1,
                textAlign: 'center',
                flex: 1,
              },
            ]}>
            {text}
          </RegularText>
          {icon}
        </RowWrapperBasic>
      ) : isLoading ? (
        <ActivityIndicator color={colors.appTextColor3} />
      ) : (
        <Text
          style={[
            styles.borderdButtonText,
            {color: textColor ?? colors.white},
            textStyle,
          ]}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export const ButtonColored = ({
  text = '',
  onPress,
  disabled,
  background,
  textColor,
  animation,
  duration,
  withIcon,
  style,
  isLoading,
  textStyle,
}) => {
  return (
    <Wrapper animation={animation} duration={duration}>
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={disabled}
        style={[
          styles.buttonColored,
          {
            backgroundColor: background
              ? background
              : disabled
              ? colors.appButton2
              : colors.appButtonColor1,
          },
          style,
        ]}
        onPress={onPress}>
        {withIcon ? (
          <RowWrapperBasic>
            <Spacer isSmall horizontal />
            <Text
              style={[
                styles.coloredButtonText,
                {color: textColor ?? colors.appTextColor1},
              ]}>
              {text}
            </Text>
          </RowWrapperBasic>
        ) : isLoading ? (
          <ActivityIndicator color={colors.appTextColor3} />
        ) : (
          <Text
            style={[
              styles.coloredButtonText,
              {color: textColor ?? colors.appTextColor1},
              textStyle,
            ]}>
            {text}
          </Text>
        )}
      </TouchableOpacity>
    </Wrapper>
  );
};

export const SelectableButtons = ({
  buttons,
  onClick,
  animatedBtnStyle,
  btnStyle,
}) => {
  const [btnContainerWidth, setWidth] = useState(0);
  const btnWidth = btnContainerWidth / buttons.length;
  const translateX = useRef(new Animated.Value(0)).current;
  const translateXOpposit = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });
  const onPress = i => {
    onClick(i + 1);
    Animated.spring(translateX, {
      toValue: i * btnWidth,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };
  return (
    <View
      style={[styles.btnContainer, btnStyle]}
      onLayout={e => setWidth(e.nativeEvent.layout.width)}>
      {buttons.map((btn, i) => (
        <TouchableOpacity
          activeOpacity={1}
          key={btn}
          style={styles.btn}
          onPress={() => onPress(i)}>
          <Text style={styles.btnTextInactive}>{btn}</Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.animatedBtnContainer,
          {width: btnWidth, transform: [{translateX}]},
          animatedBtnStyle,
        ]}>
        {buttons.map(btn => (
          <Animated.View
            key={btn}
            style={[
              styles.animatedBtn,
              {
                width: btnWidth,
                transform: [{translateX: translateXOpposit}],
                animatedBtnStyle,
              },
            ]}>
            <Text style={styles.btnTextActive}>{btn}</Text>
          </Animated.View>
        ))}
      </Animated.View>
    </View>
  );
};

export const RadioButtonWithTitle = ({title, isActive, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{marginBottom: height(1)}}>
      <RowWrapperBasic>
        <Wrapper style={styles.radioOuter}>
          <Wrapper style={isActive && styles.radioInner} />
        </Wrapper>
        {/* <Spacer isSmall horizontal /> */}
        <MediumText style={styles.radioTitle}>{title}</MediumText>
      </RowWrapperBasic>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBorder: {
    height: height(6.8),
    borderRadius: totalSize(1.2),
    ...appStyles.center,
    width: width(92),
  },
  borderdButtonText: {
    fontSize: totalSize(1.75),
    fontFamily: fontFamily.appTextSemiBold,
  },
  buttonColored: {
    height: height(6.5),
    borderRadius: 10,
    ...appStyles.center,
  },
  coloredButtonText: {
    fontSize: totalSize(1.7),
    fontFamily: fontFamily.appTextSemiBold,
  },

  btnContainer: {
    // height: 35,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: colors.appBgColor2,
    width: '100%',
    borderColor: colors.appBorderColor1,
    marginVertical: height(3),
  },

  btn: {
    flex: 1,
    backgroundColor: colors.appBgColor2,
    borderWidth: 1.5,
    borderColor: colors.appBorderColor5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: height(5),
    marginHorizontal: 5,
  },

  animatedBtnContainer: {
    height: height(5),
    flexDirection: 'row',
    position: 'absolute',
    overflow: 'hidden',
    backgroundColor: colors.appButtonColor1,
    borderRadius: 10,
  },
  animatedBtn: {
    height: height(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextActive: {
    color: colors.appTextColor2,
    fontFamily: fontFamily.appTextMedium,
  },
  btnTextInactive: {
    color: colors.appTextColor3,
    fontFamily: fontFamily.appTextMedium,
  },

  radioOuter: {
    height: width(5),
    width: width(5),
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.appBorderColor1,
    ...appStyles.center,
  },
  radioInner: {
    height: width(2.5),
    width: width(2.5),
    borderRadius: 10,
    backgroundColor: colors.appBgColor6,
    ...appStyles.center,
  },
  radioTitle: {
    marginLeft: width(3),
    color: colors.appTextColor27,
  },
});
