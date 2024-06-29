import React, {Children, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';
import Modal from 'react-native-modal';

import {colors} from '../../constants';
import {Icon} from 'react-native-elements';
import {ComponentWrapper, RowWrapperBasic, Wrapper} from '../wrappers';
import {MediumText, MediumTitle, RegularText} from '../text';
import {Spacer} from '../spacers';

export const PrimaryModal = ({
  isVisible,
  toggleModal,
  swipeDisabled,
  title,
  description,
  Button,
  onPressCancelDelivery,
  onPressKeepDelivery,
  onPressClose,
}) => {
  return (
    <Wrapper>
      {Button}
      <Modal
        animationIn={'bounceIn'}
        animationOut={'bounceOut'}
        animationType="fade"
        isVisible={isVisible}
        swipeDirection={swipeDisabled ? null : 'down'}
        onSwipeComplete={toggleModal}
        style={styles.modal}
        onBackdropPress={toggleModal}
        backdropOpacity={0.3}>
        <Wrapper style={styles.showModal}>
          <ComponentWrapper>
            <Spacer height={height(2)} />
            <MediumTitle style={styles.hintModalText}>{title}</MediumTitle>
            <Spacer height={height(2)} />
            <RegularText style={styles.hint}>{description}</RegularText>
          </ComponentWrapper>
        </Wrapper>
      </Modal>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
  },
  showModal: {
    backgroundColor: colors.white,
    height: height(30),
    width: width(70),
    borderRadius: totalSize(1.2),
  },

  hintModalText: {
    color: colors.appTextColor3,
    textAlign: 'center',
  },
  hint: {
    color: colors.black,
    textAlign: 'justify',
  },
});
