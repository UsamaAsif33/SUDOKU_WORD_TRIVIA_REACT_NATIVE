import {height, width, totalSize} from 'react-native-dimension';

import {
  ComponentWrapper,
  LargeTitle,
  RowWrapperBasic,
  Spacer,
  TextInputBordered,
  TinyText,
  Wrapper,
} from '../../../../components';
import {Icon} from 'react-native-elements';
import {FlatList, StyleSheet} from 'react-native';
import {colors} from '../../../../constants';

export const ProfileCard = ({item}) => {
  return (
    <Wrapper style={styles.mainContainer}>
      <ComponentWrapper>
        <Spacer height={height(1)} />
        <TinyText style={styles.cardHeaderText}>{item.title}</TinyText>
        <Spacer height={height(0.7)} />
        <LargeTitle>{item.score}</LargeTitle>
        <Spacer height={height(0.5)} />
        {item.arrowDown ? (
          <RowWrapperBasic>
            <Wrapper style={styles.icon2}>
              <Icon
                name="arrow-down-left"
                type="feather"
                color={colors.appIconColor16}
                size={totalSize(1.5)}
              />
            </Wrapper>
            <TinyText style={styles.percentText2}>{item.percent}</TinyText>
          </RowWrapperBasic>
        ) : (
          <RowWrapperBasic>
            <Wrapper style={styles.icon}>
              <Icon
                name="arrow-up-right"
                type="feather"
                color={colors.appIconColor13}
                size={totalSize(1.5)}
              />
            </Wrapper>
            <TinyText style={styles.percentText}>{item.percent}</TinyText>
          </RowWrapperBasic>
        )}
        <Spacer height={height(0.8)} />
      </ComponentWrapper>
    </Wrapper>
  );
};

export const ProfileCardFlatList = ({data}) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <Spacer height={height(1.4)} />}
      columnWrapperStyle={{justifyContent: 'space-evenly'}}
      numColumns={2}
      data={data}
      renderItem={({item, index}) => <ProfileCard item={item} />}
    />
  );
};

export const ProfileFields = () => {
  return (
    <Wrapper>
      <TextInputBordered placeholder={'JaneDoe@gmail.com'} editable={false} />

      <Spacer height={height(1.3)} />
      <TextInputBordered placeholder={'JaneDoe'} editable={false} />

      <Spacer height={height(1.3)} />
      <TextInputBordered placeholder={'29/04/1990'} editable={false} />

      <Spacer height={height(1.3)} />
      <TextInputBordered placeholder={'Male'} editable={false} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: width(40.2),
    backgroundColor: colors.appBgColor14,
    borderRadius: totalSize(1.2),
  },
  cardHeaderText: {
    fontWeight: '700',
  },
  icon: {
    width: totalSize(2),
    height: totalSize(2),
    borderRadius: totalSize(2) / 2,
    backgroundColor: colors.appBgColor12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentText: {
    color: colors.appTextColor13,
    marginHorizontal: width(1),
  },
  icon2: {
    width: totalSize(2),
    height: totalSize(2),
    borderRadius: totalSize(2) / 2,
    backgroundColor: colors.appBgColor15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentText2: {
    color: colors.appTextColor16,
    marginHorizontal: width(1),
  },
});
