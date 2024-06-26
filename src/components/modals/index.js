import React from 'react';
import { StyleSheet, View } from 'react-native'
import { height, totalSize, width } from 'react-native-dimension';
import Modal from 'react-native-modal';
import { Wrapper, } from '..';

export const PrimaryModal = ({ isVisible, toggleModal, swipeDisabled, onPressCancelDelivery, onPressKeepDelivery, onPressClose }) => {
    return (
        <Modal
            animationType="slide"
            isVisible={isVisible}
            swipeDirection={swipeDisabled ? null : 'down'}
            onSwipeComplete={toggleModal}
            style={styles.modal}
            onBackdropPress={toggleModal}
            backdropOpacity={0.3}
        >
            <Wrapper>

            </Wrapper>
        </Modal>
    );
};



const styles = StyleSheet.create({

    modal: {
        marginHorizontal: width(10),
        borderWidth: 0,
    },



})