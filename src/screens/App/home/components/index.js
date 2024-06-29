import {Icon} from 'react-native-elements';
import {height, width, totalSize} from 'react-native-dimension';

import {
  ComponentWrapper,
  MediumTitle,
  PrimaryImage,
  RegularText,
  RowWrapper,
  SmallText,
  Spacer,
  TinyText,
  Wrapper,
} from '../../../../components';
import {colors} from '../../../../constants';
import {FlatList, Pressable, StyleSheet, TouchableOpacity} from 'react-native';

export const HomeIcons = ({onPressSettings, onPressInstruction}) => {
  return (
    <RowWrapper>
      <Icon
        name="info"
        type="feather"
        size={totalSize(2.4)}
        color={colors.white}
        onPress={onPressInstruction}
      />
      <Icon
        name="settings-outline"
        type="ionicon"
        size={totalSize(2.4)}
        color={colors.white}
        onPress={onPressSettings}
      />
    </RowWrapper>
  );
};

export const GameCard = ({item, onPress}) => {
  return (
    <Wrapper>
      <RowWrapper>
        <MediumTitle>{item.name}</MediumTitle>
        <MediumTitle style={styles.text}>
          {item.score ? item.score : <GameBtn onPress={onPress} />}
        </MediumTitle>
      </RowWrapper>
      <Spacer height={height(2.5)} />
      <Pressable onPress={onPress}>
        <Wrapper style={styles.gameWrapper}>
          <Wrapper style={styles.mainContainer}>
            <Spacer height={height(1)} />
            <PrimaryImage
              resizeMode={'contain'}
              source={item.image}
              styles={styles.gameImg}
            />
            <Spacer height={height(0.5)} />
            <ComponentWrapper>
              <RegularText style={styles.gameText}>{item.volume}</RegularText>
              <SmallText style={styles.LineText}>{item.star}</SmallText>
              <TinyText style={styles.description}>{item.description}</TinyText>
            </ComponentWrapper>

            <Spacer height={height(1)} />
          </Wrapper>
        </Wrapper>
      </Pressable>
    </Wrapper>
  );
};

export const GameCardFlatList = ({data, onPress}) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <Spacer height={height(6)} />}
      data={data}
      renderItem={({item, index}) => (
        <GameCard item={item} onPress={() => onPress(item)} />
      )}
    />
  );
};

const GameBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <RegularText>Start Now</RegularText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gameWrapper: {
    alignItems: 'center',
  },
  text: {
    color: colors.appTextColor8,
  },
  gameImg: {
    width: '90%',
    height: height(16.5),
    alignSelf: 'center',
  },
  mainContainer: {
    width: width(57),
    backgroundColor: colors.white,
    borderRadius: totalSize(0.8),
  },
  gameText: {
    color: colors.appTextColor3,
    fontWeight: '700',
  },
  LineText: {
    color: colors.black,
  },
  description: {
    color: colors.black,
  },
  btn: {
    width: width(23.2),
    height: height(4.1),
    backgroundColor: colors.appButtonColor3,
    borderRadius: totalSize(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
