import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {height, totalSize, width} from 'react-native-dimension';
import {MediumTitle, RegularText, Spacer, Wrapper} from '..';
import {colors} from '../../constants';

export const BottomSheet = ({
  navigation,
  innerRef,
  heights,
  title,
  description,
  onPressNo,
  onPressYes,
  onCameraPress,
  onGalleryPress,
  onClosePress,
  Children,
}) => {
  return (
    <RBSheet
      ref={innerRef}
      closeOnDragDown={true}
      closeOnPressMask={true}
      height={heights}
      customStyles={{
        draggableIcon: {
          backgroundColor: colors.appButton1,
        },
        container: {
          backgroundColor: colors.appBgColor2,
          borderTopLeftRadius: totalSize(2),
          borderTopRightRadius: totalSize(2),
          height: height(40),
        },
      }}>
      <Wrapper>
        <Spacer height={height(5.4)} />
        <Wrapper style={styles.titleWrap}>
          <MediumTitle style={styles.bottomText}>{title}</MediumTitle>
        </Wrapper>
        <Spacer height={height(1.5)} />
        <Wrapper style={styles.textWrapper}>
          <RegularText style={styles.bottomText}>{description}</RegularText>
          <Spacer height={height(4.2)} />
          <Wrapper style={styles.btnMainWrap}>
            <TouchableOpacity onPress={onPressNo} style={styles.btnWrap}>
              <RegularText>No</RegularText>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressYes} style={styles.btnWrap2}>
              <RegularText>Yes</RegularText>
            </TouchableOpacity>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  titleWrap: {
    width: width(80.2),
    alignSelf: 'center',
  },
  textWrapper: {
    width: width(84.7),
    alignSelf: 'center',
  },
  bottomText: {
    textAlign: 'center',
  },
  btnMainWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnWrap: {
    width: width(38.7),
    height: height(7),
    borderRadius: totalSize(1),
    borderWidth: totalSize(0.1),
    borderColor: colors.appBorderColor3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnWrap2: {
    width: width(38.7),
    height: height(7),
    borderRadius: totalSize(1),
    backgroundColor: colors.appButtonColor3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
