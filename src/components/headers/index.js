import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  LargeText,
  MediumText,
  MediumTitle,
  RegularText,
  TinyTitle,
} from '../text';
import {RowWrapper, RowWrapperBasic, Wrapper} from '../wrappers';
import {height, width, totalSize} from 'react-native-dimension';
import {colors, fontFamily, fontSize} from '../../constants';
import {Icon} from 'react-native-elements';
import {PrimaryImage} from '../images';
import {AppIcons} from '../../assets';
import {Spacer} from '../spacers';

export const MainHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <RowWrapperBasic>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" type="ionicon" size={22} color={colors.white} />
      </TouchableOpacity>
      <MediumTitle style={styles.pageName}>{title}</MediumTitle>
    </RowWrapperBasic>
  );
};

export const HeaderTitle = () => {
  return (
    <MediumTitle
      style={styles.headertitle}>{`SUDOKU WORD\nTRIVIA`}</MediumTitle>
  );
};

export const HeaderTitleWithFlower = () => {
  return (
    <Wrapper style={styles.mainContainer}>
      <RowWrapper style={styles.rowWrapper}>
        <PrimaryImage
          resizeMode={'contain'}
          styles={styles.headerImg}
          source={AppIcons.flower}
        />
        <RegularText style={styles.flowerText}>
          A DIFFERENT KIND OF SUKOKU
        </RegularText>
        <PrimaryImage
          resizeMode={'contain'}
          styles={styles.headerImg2}
          source={AppIcons.flower2}
        />
      </RowWrapper>
    </Wrapper>
  );
};

export const Header = ({style}) => {
  return (
    <Wrapper style={style}>
      <HeaderTitle />
      <Spacer height={height(0.8)} />
      <HeaderTitleWithFlower />
    </Wrapper>
  );
};

export const styles = StyleSheet.create({
  title: {
    color: colors.appTextColor5,
    fontFamily: fontFamily.appTextMedium,
    fontSize: totalSize(2.1),
  },

  pageName: {
    color: colors.white,
    fontFamily: fontFamily.appTextMedium,
    fontSize: totalSize(2.4),
    alignSelf: 'center',
    paddingHorizontal: width(3),
  },
  mainContainer: {
    alignItems: 'center',
    height: height(5.1),
    backgroundColor: colors.appBgColor3,
  },
  headerImg: {
    width: width(6.2),
    height: height(4.2),
  },
  headerImg2: {
    width: width(5),
    height: height(4),
  },
  headertitle: {
    textAlign: 'center',
  },
  rowWrapper: {
    flex: 1,
    paddingHorizontal: width(2),
    width: '100%',
  },
  flowerText: {
    fontSize: totalSize(2.1),
  },
});
