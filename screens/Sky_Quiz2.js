import { useNavigation } from "@react-navigation/core";
import LottieView from 'lottie-react-native';
import React, { useState } from "react";
import { Image, ImageBackground, Modal, StyleSheet, ToastAndroid, TouchableOpacity, View } from "react-native";
import CustomButton from "../components/CustomButton";
import ExitButton from "../components/ExitButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import SkyQuiz2Background from "../components/SkyQuiz2Background";

const Sky_Quiz2 = () => {
    const navigation = useNavigation();

    const [select, setSelect] = useState('');
    const [isBlack, setIsBlack] = useState(false);
    const [isBlue, setIsBlue] = useState(false);
    const [isGray, setIsGray] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                style={styles.modal}
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.modalBackgroundContainer}>
                    <View style={styles.modalHeaderContainer}>
                        <ExitButton
                            src={require('../assets/icons/modal_exit.png')}
                            target={() => { setModalVisible(false) }} />
                    </View>
                    <View style={styles.textContainer}>
                        <Image style={styles.modalText} source={require('../assets/texts/retry_text.png')} />
                    </View>
                    <View style={styles.modalContent}>
                        <LottieView
                            style={styles.modalImage}
                            source={require('../assets/json/popup.json')}
                            autoPlay={true}
                            loop={false}
                        />
                    </View>
                    <View style={styles.modalButtonContainer}>
                        <CustomButton
                            src={require('../assets/buttons/retry_button.png')}
                            target={() => { setModalVisible(false) }}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.backgroundContainer}>
                <SkyQuiz2Background />
            </View>
            <View style={styles.nestedContainer}>
                <ImageBackground style={styles.nestedImage} source={require('../assets/backgrounds/sky_quiz2_nested_background.png')}>
                    <View style={styles.blueGrayContainer}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { setSelect('blue') }} onPressIn={() => { setIsBlue(true) }} onPressOut={() => { setIsBlue(false) }}>
                            <ImageBackground style={isBlue ? styles.colorBlue_pressed : styles.colorBlue} source={select == 'blue' ? require('../assets/icons/color_blue_selected.png') : require('../assets/icons/color_blue.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { setSelect('gray') }} onPressIn={() => { setIsGray(true) }} onPressOut={() => { setIsGray(false) }}>
                            <ImageBackground style={isGray ? styles.colorGray_pressed : styles.colorGray} source={select == 'gray' ? require('../assets/icons/color_gray_selected.png') : require('../assets/icons/color_gray.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.blackContainer}>
                        <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={() => { setSelect('black') }} onPressIn={() => { setIsBlack(true) }} onPressOut={() => { setIsBlack(false) }}>
                            <ImageBackground style={isBlack ? styles.colorBlack_pressed : styles.colorBlack} source={select == 'black' ? require('../assets/icons/color_black_selected.png') : require('../assets/icons/color_black.png')} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.nextButtonContainer}>
                    <CustomButton
                        src={select ? require('../assets/buttons/next_button_enabled.png') : require('../assets/buttons/next_button_disabled.png')}
                        target={() => {
                            if (!select) {
                                ToastAndroid.show('색을 선택해주세요!', ToastAndroid.SHORT);
                            } else if (select != 'blue') {
                                setModalVisible(true);
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
    modalHeaderContainer: {
        width: wp('55%'),
        alignItems: 'flex-end'
    },
    modalBackgroundContainer: {
        width: wp('55%'),
        height: hp('60%'),
        backgroundColor: 'white',
        marginLeft: wp('25%'),
        marginTop: hp('25%'),
        borderRadius: 45,
        alignItems: 'center'
    },
    textContainer: {
        width: wp('55%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('-5%')
    },
    modalImage: {
        width: wp('40%'),
        height: hp('80%'),
        marginTop: hp('-15%'),
        alignItems: 'center'
    },
    modalText: {
        width: wp('40%'),
        resizeMode: 'contain'
    },
    modalButtonContainer: {
        marginTop: hp('-45%')
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
        width: wp('70%'),
        height: hp('40.4%'),
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
        borderRadius: 50
    },
    blueGrayContainer: {
        flexDirection: 'row',
        marginTop: hp('8%')
    },
    blackContainer: {
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorBlack: {
        width: wp('20.7%'),
        height: hp('10%'),
        resizeMode: 'cover',
        marginTop: hp('3%')
    },
    colorBlue: {
        width: wp('20.7%'),
        height: hp('10%'),
        resizeMode: 'cover',
        marginRight: wp('8%')
    },
    colorGray: {
        width: wp('20.7%'),
        height: hp('10%'),
        resizeMode: 'cover'
    },
    colorBlack_pressed: {
        width: wp('18%'),
        height: hp('9%'),
        marginTop: hp('3%'),
        resizeMode: 'cover'
    },
    colorBlue_pressed: {
        width: wp('18%'),
        height: hp('9%'),
        marginRight: wp('8%'),
        resizeMode: 'cover'
    },
    colorGray_pressed: {
        width: wp('18%'),
        height: hp('9%'),
        resizeMode: 'cover'
    },
    buttonContainer: {
        width: wp('80%'),
        height: hp('10%'),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: hp('5%')
    },
    nextButtonContainer: {
        width: wp('35%'),
        height: hp('10%')
    },
})

export default Sky_Quiz2;