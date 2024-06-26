import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Wrapper} from '../wrappers';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors, fontFamily} from '../../constants';
import {height, width, totalSize} from 'react-native-dimension';
import {InputTitle} from '../text';

const useCustomDropDown = initialItems => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(initialItems);
  return {open, setOpen, value, setValue, items, setItems};
};

const PrimaryDropDown = ({title = title, initialItems, placeholder, style, zIndex}) => {
  const {open, setOpen, value, setValue, items, setItems} =
    useCustomDropDown(initialItems);
  return (
    <Wrapper style={[{ zIndex: 2}, style]}>
      {title ? (
        <InputTitle style={styles.propertyType}>{title}</InputTitle>
      ) : null}
      <DropDownPicker
        placeholder={placeholder ? placeholder : 'Select your city'}
        placeholderStyle={{color: colors.appTextColor2}}
        listItemLabelStyle={{color: colors.appTextColor2}}
        showTickIcon={true}
        style={[styles.dropDown]}
        open={open}
        setOpen={setOpen}
        value={value}
        setValue={setValue}
        items={items}
        setItems={setItems}
        listMode="FLATLIST"
        dropDownContainerStyle={[styles.dropDownContainer, {zIndex: 1}]}
      />
    </Wrapper>
  );
};

export default PrimaryDropDown;

const styles = StyleSheet.create({
  propertyType: {
    color: colors.appTextColor3,
    fontFamily: fontFamily.appTextSemiBold,
    fontSize: totalSize(1.7),
  },
  dropDown: {
    height: height(6.6),
    borderRadius: totalSize(1.8),
    backgroundColor: colors.white,
    width: width(92),
    justifyContent: 'center',
  },
  dropDownContainer: {
    width: width(92),
    borderRadius: totalSize(1.8),
    backgroundColor: colors.white,
  },
});
