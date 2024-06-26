import {StyleSheet, TouchableOpacity} from 'react-native';
import {height, width, totalSize} from 'react-native-dimension';
import {
  Custom,
  IconWithBg,
  IconWithLeftText,
  RegularText,
  RowWrapperBasic,
  SmallTitle,
  Spacer,
  TinyTitle,
  Wrapper,
} from '../../../../components';
import {colors, fontSize} from '../../../../constants';
import {Icon} from 'react-native-elements';
import {AppIcons} from '../../../../assets';

export const BackgoundColoredView = () => {
  return <Wrapper style={styles.mainContainer}></Wrapper>;
};

export const Dots = () => {
  return (
    <RowWrapperBasic style={styles.mainDotsContainer}>
      <Wrapper style={styles.dot1}></Wrapper>
      <Wrapper style={styles.dot2}></Wrapper>
      <Wrapper style={styles.dot2}></Wrapper>
    </RowWrapperBasic>
  );
};

export const OnBoardingTitleAndDesciption = () => {
  return (
    <Wrapper style={styles.descriptionWrapper}>
      <TinyTitle>{`Welcome to SUDOKU WORD\nTRIVIA`}</TinyTitle>
      <Spacer height={height(2.8)} />
      <RegularText style={styles.descriptionText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.{' '}
      </RegularText>
    </Wrapper>
  );
};

export const NextButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.nextBtn}>
      <RowWrapperBasic>
        <RegularText>Next</RegularText>
        <Custom icon={AppIcons.Arrow} size={totalSize(2)} />
      </RowWrapperBasic>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.appBgColor4,
    height: height(33),
  },
  mainDotsContainer: {
    marginHorizontal: width(3.5),
  },
  dot1: {
    width: width(8.1),
    height: height(0.5),
    backgroundColor: colors.appBgColor3,
    borderRadius: totalSize(0.4),
  },
  dot2: {
    marginHorizontal: width(0.5),
    width: totalSize(0.4),
    height: totalSize(0.4),
    backgroundColor: colors.white,
    borderRadius: totalSize(0.4) / 2,
  },
  descriptionWrapper: {
    width: width(72),
    marginHorizontal: width(3.5),
  },
  descriptionText: {
    color: colors.appTextColor5,
    fontSize: totalSize(1.6),
  },
  nextBtn: {
    position: 'absolute',
    right: width(1.4),
    bottom: height(12.8),
  },
});
