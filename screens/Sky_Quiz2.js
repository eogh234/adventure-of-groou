import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, ToastAndroid, TouchableOpacity, View } from "react-native";
import CustomButton from "../components/CustomButton";
import IconButton from "../components/IconButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import SkyQuiz2Background from "../components/SkyQuiz2Background";

const Sky_Quiz2 = () => {
    const navigation = useNavigation();

    const [select, setSelect] = useState('');
    const [isBlack, setIsBlack] = useState(false);
    const [isBlue, setIsBlue] = useState(false);
    const [isGray, setIsGray] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <SkyQuiz2Background />
            </View>
            <View style={styles.nestedContainer}>
                <ImageBackground style={styles.nestedImage} source={require('../assets/backgrounds/sky_quiz2_nested_background.png')}>
                    <View sytle={styles.colorContainer}>
                        <View sytle={styles.blueGrayContainer}>
                            <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { setSelect('blue') }} onPressIn={() => { setIsBlue(true) }} onPressOut={() => { setIsBlue(false) }}>
                                <ImageBackground style={isBlue ? styles.colorBlue_pressed : styles.colorBlue} source={require('../assets/icons/color_blue.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { setSelect('gray') }} onPressIn={() => { setIsGray(true) }} onPressOut={() => { setIsGray(false) }}>
                                <ImageBackground style={isGray ? styles.colorGray_pressed : styles.colorGray} source={require('../assets/icons/color_gray.png')} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { setSelect('black') }} onPressIn={() => { setIsBlack(true) }} onPressOut={() => { setIsBlack(false) }}>
                            <ImageBackground style={isBlack ? styles.colorBlack_pressed : styles.colorBlack} source={require('../assets/icons/color_black.png')} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.iconButtonContainer}>
                    <IconButton src={require('../assets/buttons/back_button.png')} target={() => { console.log("BACK!!") }} />
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { console.log("POP UP!!") }} />
                </View>
                <View style={styles.nextButtonContainer}>
                    <CustomButton
                        src={select ? require('../assets/buttons/next_button_enabled.png') : require('../assets/buttons/next_button_disabled.png')}
                        target={() => {
                            if (!select) {
                                ToastAndroid.show('색을 선택해주세요!', ToastAndroid.SHORT);
                            } else if (select != 'blue') {
                                console.log('POP UP');
                            } else {
                                navigation.navigate('Sky_Result2');
                            }
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    nestedContainer: {
        width: wp('80%'),
        height: hp('50%'),
        marginTop: hp('30%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    nestedImage: {
        width: wp('72.2%'),
        height: hp('42.2%'),
        alignItems: 'center',
        resizeMode: 'contain',
    },
    colorContainer: {

    },
    blueGrayContainer: {

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorBlack: {
        width: wp('21%'),
        height: hp('10%'),
    },
    colorBlue: {
        width: wp('21%'),
        height: hp('10%'),
        marginTop: hp('10%')
    },
    colorGray: {
        width: wp('21%'),
        height: hp('10%')
    },
    colorBlack_pressed: {
        width: wp('18%'),
        height: hp('9%'),
    },
    colorBlue_pressed: {
        width: wp('18%'),
        height: hp('9%'),
        marginTop: hp('10%')
    },
    colorGray_pressed: {
        width: wp('18%'),
        height: hp('9%')
    },
    buttonContainer: {
        width: wp('80%'),
        height: hp('10%'),
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    iconButtonContainer: {
        width: wp('40%'),
        height: hp('10%'),
        flexDirection: 'row'
    },
    nextButtonContainer: {
        width: wp('35%'),
        height: hp('10%')
    },
})

export default Sky_Quiz2;