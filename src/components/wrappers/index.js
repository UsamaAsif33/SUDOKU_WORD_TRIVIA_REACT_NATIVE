import React from 'react';
import {
  Image,
  ImageBackground,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {appStyles} from '../../utilities';
import {colors, sizes} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {AppImages} from '../../assets';
import {height, width, totalSize} from 'react-native-dimension';

export const MainWrapper = props => {
  const {children, style, imageStyle, animation} = props;
  return (
    <Animatable.View
      animation={animation}
      style={[appStyles.mainContainer, style]}>
      <ImageBackground
        source={AppImages.Background}
        style={{
          height: height(100),
          width: width(100),
          ...imageStyle,
        }}>
        {children}
      </ImageBackground>
    </Animatable.View>
  );
};

export const ComponentWrapper = props => {
  const {children, style, animation} = props;
  return (
    <Animatable.View
      animation={animation}
      style={[appStyles.compContainer, styles.removerMarginVertical, style]}>
      {children}
    </Animatable.View>
  );
};

export const ImageBackgroundWrapper = props => {
  const {children, style, source, resizeMode} = props;
  return (
    <ImageBackground
      resizeMode={resizeMode ? resizeMode : 'contain'}
      source={AppImages.Background}
      style={[appStyles.bgContainer, style]}>
      {<MainWrapper children={children} />}
    </ImageBackground>
  );
};

export const CustomImage = props => {
  const {source, style} = props;
  return <Image source={source} style={style} />;
};
export const Wrapper = ({
  children,
  style,
  animation,
  flex,
  duration,
  iterationCount,
  direction,
  delay,
  onAnimationEnd,
}) => {
  return (
    <Animatable.View
      iterationCount={iterationCount}
      onAnimationEnd={onAnimationEnd}
      direction={direction}
      animation={animation}
      delay={delay}
      useNativeDriver={true}
      duration={duration}
      style={[{flex: flex}, style]}>
      {children}
    </Animatable.View>
  );
};

export const RowWrapperBasic = props => {
  const {children, style, animation} = props;
  return (
    <Animatable.View animation={animation} style={[appStyles.rowView, style]}>
      {children}
    </Animatable.View>
  );
};
export const RowWrapper = props => {
  const {children, style, animation} = props;
  return (
    <Animatable.View
      animation={animation}
      style={[appStyles.rowCompContainer, styles.removerMarginVertical, style]}>
      {children}
    </Animatable.View>
  );
};

export const AbsoluteWrapper = props => {
  const {children, style, animation} = props;
  return (
    <Animatable.View
      animation={animation}
      style={[{position: 'absolute'}, style]}>
      {children}
    </Animatable.View>
  );
};
export const RoundedWrapper = props => {
  const {children, style, animation, onPress} = props;
  return (
    <Animatable.View
      animation={animation}
      style={[{justifyContent: 'center', alignItems: 'center'}, style]}>
      {children}
    </Animatable.View>
  );
};
export const CardWrapper = props => {
  const {children, style, animation} = props;
  return (
    <Animatable.View
      animation={animation}
      style={[appStyles.cardView, {borderRadius: sizes.cardRadius}, style]}>
      {children}
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  mainWrapperPrimary: {
    ...appStyles.mainContainer,
    backgroundColor: colors.appBgColorPrimary,
  },
  removerMarginVertical: {
    marginVertical: null,
  },
  footerWrapperPrimary: {
    ...appStyles.mainContainer,
  },
});
