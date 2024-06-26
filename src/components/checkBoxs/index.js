import React, { useState } from 'react'
import { StyleSheet, } from 'react-native'
import { IconWithLeftText, } from '..';
import { totalSize } from 'react-native-dimension';
import { colors, sizes } from '../../constants';

export const PrimaryCheckBox = ({ textStyle, containerStyle, text, }) => {
    const [checked, setCheck] = useState(false);

    const checkedIconName = 'checkbox-marked'
    const uncheckedIconName = 'checkbox-blank-outline'
    const checkboxIconType = 'material-community'
    const checkboxappIconsize = sizes.icons.medium
    const checkIconColor = colors.primary
    const uncheckIconColor = colors.appIconColor3
    return (
        <IconWithLeftText
            text={text}
            iconName={checked ? checkedIconName : uncheckedIconName}
            iconType={checkboxIconType}
            iconSize={checkboxappIconsize}
            tintColor={checked ? checkIconColor : uncheckIconColor}
            // onPress={onPress}
            onPress={() => setCheck(!checked)}
            textStyle={[styles.checkboxText, textStyle]}
            containerStyle={containerStyle}
        />
    );
}



const styles = StyleSheet.create({
    checkboxText: {
        color: colors.appTextColor4,
        fontSize: totalSize(1.5),

    }
})
