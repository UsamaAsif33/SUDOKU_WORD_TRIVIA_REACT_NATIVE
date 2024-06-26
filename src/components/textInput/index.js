import React from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {ComponentWrapper, Wrapper, RowWrapperBasic} from '../wrappers';
import {InputTitle, RegularText, SmallText, TinyText} from '../text';
import {Spacer} from '../spacers';
import {height, width, totalSize} from 'react-native-dimension';
import {styles} from './styles';
import {colors, fontFamily, sizes} from '../../constants';
import {appStyles} from '../../utilities';
import {Icon} from 'react-native-elements';

export const TextInputBordered = ({
  autoFocus,
  iconName,
  showRightIcon,
  error,
  onPressRight,
  iconType,
  required,
  left,
  onPress,
  content,
  keyboardType,
  title,
  isButton,
  titleStyle,
  placeholder,
  editable,
  animation,
  multiline,
  onFocus,
  buttonContentStyle,
  onBlur,
  onChangeText,
  rightStyle,
  secureTextEntry,
  value,
  iconColor,
  iconSize,
  containerStyle,
  inputContainerStyle,
  onPressIcon,
  inputStyle,
  right,
  iconStyle,
}) => {
  var focused = false;
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      {title ? (
        <Wrapper style={{marginStart: width(0.5)}}>
          <InputTitle
            style={[
              titleStyle,
              {
                color: colors.appTextColor3,
                fontFamily: fontFamily.appTextSemiBold,
                fontSize: totalSize(1.7),
              },
            ]}>
            {title}
            {required ? (
              <RegularText style={{color: colors.appTextColor2}}>
                {' '}
                *
              </RegularText>
            ) : null}
          </InputTitle>
        </Wrapper>
      ) : null}
      <Wrapper
        animation={animation}
        style={[styles.textInputBorderedContainer, containerStyle]}>
        <RowWrapperBasic
          style={[
            {
              borderRadius: sizes.inputRadius,
              borderWidth: 0,
              borderColor: colors.appTextColor5,
            },
            inputContainerStyle,
          ]}>
          {left ? left : null}
          <View style={{flex: 8}}>
            {isButton ? (
              content ? (
                content
              ) : (
                <ComponentWrapper
                  style={[
                    {paddingVertical: sizes.baseMargin},
                    buttonContentStyle,
                  ]}>
                  <RegularText style={value ? null : appStyles.textGray}>
                    {value ? value : placeholder}
                  </RegularText>
                </ComponentWrapper>
              )
            ) : (
              <TextInput
                autoFocus={autoFocus}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                multiline={multiline}
                placeholderTextColor={colors.appTextColor6}
                secureTextEntry={secureTextEntry}
                style={[appStyles.inputField, {}, inputStyle]}
              />
            )}
          </View>
          {right ? (
            <TouchableOpacity
              activeOpacity={0.5}
              style={[{height: height(4), paddingHorizontal: 12}, rightStyle]}
              onPress={onPressRight}>
              {right}
            </TouchableOpacity>
          ) : showRightIcon ? (
            <View style={{padding: 12}}>
              <Icon
                name={iconName}
                type={'entypo'}
                size={totalSize(2.6)}
                color={iconColor ? iconColor : colors.appIconColor7}
                iconStyle={{paddingRight: width(1.5)}}
                onPress={onPressIcon}
              />
            </View>
          ) : null}
        </RowWrapperBasic>
      </Wrapper>
      {error ? (
        <ComponentWrapper style={{marginLeft: width(0)}} animation="shake">
          <Spacer height={sizes.TinyMargin} />
          <SmallText>{error}</SmallText>
        </ComponentWrapper>
      ) : null}
    </TouchableOpacity>
  );
};

export const TextInputSearch = ({
  autoFocus,
  right,
  left,
  editable,
  onPress,
  placeholder,
  onChangeText,
  value,
  onPressSearch,
  animation,
  containerStyle,
  filterIcon,
  onPressFilter,
}) => {
  return (
    <TextInputBordered
      autoFocus={autoFocus}
      onPress={onPress}
      editable={editable}
      containerStyle={[
        {
          borderWidth: 0,
          height: height(6),
          justifyContent: 'center',
          backgroundColor: colors.appBgColor5,
        },
        containerStyle,
      ]}
      inputContainerStyle={styles.textInputSearch}
      placeholderTextColor={colors.appTextColor11}
      placeholder={placeholder ? placeholder : 'Search message'}
      onChangeText={onChangeText}
      value={value}
      animation={animation}
      disabled
      rightStyle={{height: null}}
      left={
        left ? (
          left
        ) : (
          <Icon
            name="search"
            type="feather"
            size={18}
            color={colors.appIconColor5}
            style={{marginLeft: 10}}
          />
        )
      }
      right={
        filterIcon && (
          <Icon
            name="options-outline"
            type="ionicon"
            size={22}
            color={colors.appIconColor4}
            style={{marginLeft: 10}}
            onPress={onPressFilter}
          />
        )
      }
    />
  );
};
