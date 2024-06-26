import {height, width, totalSize} from 'react-native-dimension';

import {
  ButtonBorderd,
  MediumText,
  MediumTitle,
  RowWrapper,
  RowWrapperBasic,
  Spacer,
  TextInputBordered,
  Wrapper,
} from '../components';
import {StyleSheet, ToastAndroid, TouchableOpacity} from 'react-native';
import {colors} from '../constants';
import {Avatar, Icon} from 'react-native-elements';
import {AppImages} from '../assets';

export const ComponentHeader = ({title, showRightImg}) => {
  return (
    <RowWrapper>
      <MediumTitle>{title}</MediumTitle>
      {showRightImg && (
        <Wrapper style={styles.profilePicWrapper}>
          <Avatar rounded source={AppImages.user1} size={totalSize(5)} />
        </Wrapper>
      )}
    </RowWrapper>
  );
};

export const SignInFields = ({placeholder, onPress, showPass}) => {
  return (
    <Wrapper>
      <TextInputBordered placeholder={placeholder ?? 'Your Email'} />
      <Spacer height={height(1.9)} />
      <TextInputBordered
        placeholder={'Your password'}
        secureTextEntry={showPass}
        showRightIcon
        iconName={showPass ? 'eye-with-line' : 'eye'}
        onPressIcon={onPress}
      />
    </Wrapper>
  );
};

export const Button = ({
  title,
  onPress,
  showRightArrowDownIcon,
  selectedId,
}) => {
  return (
    <ButtonBorderd
      onPress={onPress}
      style={styles.btn}
      text={title}
      icon={
        showRightArrowDownIcon ? (
          selectedId ? (
            <RightArrowUpIcon />
          ) : (
            <RightArrowDownIcon />
          )
        ) : (
          <RightArrowRightIcon />
        )
      }
    />
  );
};

const RightArrowRightIcon = () => {
  return (
    <Wrapper style={styles.icon}>
      <Icon
        name="arrowright"
        type="antdesign"
        size={totalSize(2)}
        color={colors.white}
      />
    </Wrapper>
  );
};

const RightArrowDownIcon = () => {
  return (
    <Wrapper style={styles.icon}>
      <Icon
        name="arrowdown"
        type="antdesign"
        size={totalSize(2)}
        color={colors.white}
      />
    </Wrapper>
  );
};

const RightArrowUpIcon = () => {
  return (
    <Wrapper style={styles.icon}>
      <Icon
        name="arrowup"
        type="antdesign"
        size={totalSize(2)}
        color={colors.white}
      />
    </Wrapper>
  );
};

export const GameHeader = () => {
  return (
    <RowWrapper>
      <MediumTitle>All Star Nines</MediumTitle>
      <Wrapper>
        <TouchableOpacity>
          <RowWrapperBasic style={styles.hintBtn}>
            <MediumText style={styles.hintText}>Hint</MediumText>
            <Icon
              name="lightbulb-variant-outline"
              type="material-community"
              color={colors.white}
              size={totalSize(2.4)}
            />
          </RowWrapperBasic>
        </TouchableOpacity>
      </Wrapper>
    </RowWrapper>
  );
};

const styles = StyleSheet.create({
  btn: {
    shadowColor: '#6F7EC940',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.57,
    shadowRadius: 10.19,
    elevation: 10,
  },
  icon: {
    height: totalSize(3),
    width: totalSize(3),
    backgroundColor: colors.appIconColor8,
    borderRadius: totalSize(3) / 2,
    justifyContent: 'center',
    right: width(4),
    position: 'absolute',
  },
  hintBtn: {
    width: width(23.2),
    height: height(4.1),
    backgroundColor: colors.appButtonColor3,
    borderRadius: totalSize(2),
    justifyContent: 'center',
  },
  hintText: {
    paddingHorizontal: width(1),
  },
  profilePicWrapper: {
    width: totalSize(5.5),
    height: totalSize(5.5),
    borderRadius: totalSize(5.5) / 2,
    alignItems: 'center',
    backgroundColor: colors.appBgColor11,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
