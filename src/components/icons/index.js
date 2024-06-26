import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Wrapper } from '../wrappers'
import { height, totalSize, width } from 'react-native-dimension'
import { colors, fontFamily, sizes } from '../../constants'
import { appStyles } from '../../utilities'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { RegularText, SmallText } from '../text'
export const RoundBgIcon = ({ children, bgColor, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.5} >
            <Wrapper style={[styles.roundWrapper, { backgroundColor: bgColor ?? colors.white20 }, style]}>
                {children}
            </Wrapper>
        </TouchableOpacity>
    )
}

export const ButtonWithIcon = ({ buttonStyle, onPress, shadow, shadowColored, iconSize, iconColor, iconName, iconType, buttonColor, buttonSize, customIcon, iconStyle, disabled }) => {
    const defaultButtonsize = totalSize(5)
    return (
        <TouchableOpacity activeOpacity={0.8}
            onPress={onPress}
            disabled={disabled}
            style={
                [styles.IconButtonContainer,
                {
                    height: buttonSize ? buttonSize : defaultButtonsize,
                    width: buttonSize ? buttonSize : defaultButtonsize,
                    backgroundColor: buttonColor ? buttonColor : colors.primary
                },
                shadow ? appStyles.shadow : null,
                shadowColored ? appStyles.shadowColored : null,
                    buttonStyle]
            }
        >


            <Icon
                name={iconName ? iconName : "heart"}
                type={iconType ? iconType : "material-community"}
                size={iconSize ? iconSize : sizes.icons.large}
                color={iconColor ? iconColor : colors.appColor1}
                iconStyl={iconStyle}
            />

        </TouchableOpacity>
    );
}

export const BackIcon = () => {
    const navigation = useNavigation()
    return (
        <Wrapper style={styles.backBtnWrapper} >
            <Icon name="arrow-back-outline" type="ionicon" color={colors.appIconColor2} size={22} onPress={() => navigation.goBack()} />
        </Wrapper>
    )
}
export const IconWithLeftText = ({ text, containerStyle, title, customIcon, onPress, tintColor, iconName, iconType, iconSize, textStyle, titleStyle, direction, iconStyle, button }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={[{ flexDirection: direction ? direction : 'row', alignItems: 'center', }, containerStyle]}>
            {
                customIcon ?
                    <Custom icon={customIcon} size={iconSize ? iconSize : totalSize(2)} color={tintColor} />
                    :
                    <Icon name={iconName ? iconName : 'checkcircle'} type={iconType ? iconType : 'antdesign'} size={iconSize ? iconSize : totalSize(1.8)} color={tintColor ? tintColor : colors.appBgColor1} iconStyle={iconStyle} />
            }
            <View style={direction === 'column' ? { marginVertical: height(1.5) } : { marginHorizontal: width(3) }}>
                {
                    title ?
                        <RegularText style={[appStyles.textRegular, { color: tintColor ? tintColor : colors.appTextColor1, fontFamily: fontFamily.appTextBold, marginBottom: 5 }, titleStyle]}>{title}</RegularText>
                        :
                        null
                }
                <SmallText style={[{ color: tintColor ? tintColor : colors.appBgColor1, }, textStyle]}>{text}</SmallText>
            </View>

        </TouchableOpacity>
    );
}
export const Custom = ({ icon, size, animation, duration, color, onPress }) => {
    const defaulSize = totalSize(5)
    return (
        <View animation={animation} duration={duration}>
            <TouchableOpacity disabled={!onPress} onPress={onPress}>
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{ height: size ? size : defaulSize, width: size ? size : defaulSize, tintColor: color }}
                />
            </TouchableOpacity>
        </View>
    );
}

export const IconWithBg = ({ icon, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={onPress}
            style={styles.iconWrapper}>
            <Icon name='calendar' type='antdesign' color={colors.appIconColor4} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    roundWrapper: {
        height: height(5),
        width: height(5),
        borderRadius: height(3),
        ...appStyles.center
    },
    IconButtonContainer: {
        height: totalSize(5),
        width: totalSize(5),
        backgroundColor: colors.appColor1,
        borderRadius: 10,
        ...appStyles.center,
    },
    backBtnWrapper: {
        top: height(2),
        left: width(3),
        alignSelf: 'flex-start',
        padding: 10
    },

    iconWrapper: {
        backgroundColor: colors.appBgColor10,
        borderRadius: 8,
        padding: width(2)
    },
})