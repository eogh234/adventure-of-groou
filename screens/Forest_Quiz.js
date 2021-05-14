import { useNavigation } from "@react-navigation/core";
import LottieView from 'lottie-react-native';
import React, { useState } from "react";
import { Image, ImageBackground, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomButton from "../components/CustomButton";
import ExitButton from "../components/ExitButton";
import ForestQuizBackground from "../components/ForestQuizBackground";
import IconButton from "../components/IconButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";

const Forest_Quiz = () => {
    const navigation = useNavigation();
    const [isSelected, setIsSelected] = useState('');
    const [isPositivePress, setIsPositivePress] = useState(false);
    const [isNegativePress, setIsNegativePress] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [exitModalVisible, setExitModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                style={styles.modal}
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >
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
            <Modal
                style={styles.modal}
                animationType="fade"
                transparent={true}
                visible={exitModalVisible}
            >
                <View style={styles.exitModalBackgroundContainer}>
                    <View style={styles.exitModalHeaderContainer}>
                        <ExitButton
                            src={require('../assets/icons/modal_exit.png')}
                            target={() => { setExitModalVisible(false) }} />
                    </View>
                    <View style={styles.exitTextContainer}>
                        <Image style={styles.modalText} source={require('../assets/texts/exit_text.png')} />
                    </View>
                    <View style={styles.exitModalContent}>
                        <Image
                            style={styles.exitModalImage}
                            source={require('../assets/backgrounds/modal_nested_background.png')}
                        />
                    </View>
                    <View style={styles.exitModalButtonContainer}>
                        <CustomButton
                            style={styles.exitButton}
                            src={require('../assets/buttons/exit_button.png')}
                            target={() => { setExitModalVisible(false); navigation.navigate("OnBoarding") }}
                        />
                        <CustomButton
                            style={styles.continueButton}
                            src={require('../assets/buttons/continue_button.png')}
                            target={() => { setExitModalVisible(false) }}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.backgroundContainer}>
                <ForestQuizBackground />
            </View>
            <View style={styles.nestedContainer}>
                <TouchableOpacity onPress={() => { setIsSelected('positive'); setIsNegativePress(false) }} onPressIn={() => { setIsPositivePress(true); }} onPressOut={() => { setIsPositivePress(false) }} >
                    <ImageBackground style={isPositivePress ? styles.buttonPressed : styles.button} source={isSelected == 'positive' ? require('../assets/buttons/positive_button_selected.png') : require('../assets/buttons/positive_button.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setIsSelected('negative'); setIsPositivePress(false) }} onPressIn={() => { setIsNegativePress(true); setIsPositivePress(false); }} onPressOut={() => { setIsNegativePress(false) }} >
                    <ImageBackground style={isNegativePress ? styles.buttonPressed : styles.button} source={isSelected == 'negative' ? require('../assets/buttons/negative_button_selected.png') : require('../assets/buttons/negative_button.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.iconButtonContainer}>
                    <IconButton src={require('../assets/buttons/back_button.png')} target={() => { navigation.goBack() }} />
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { setExitModalVisible(true) }} />
                </View>
                <CustomButton
                    src={isSelected ? require('../assets/buttons/next_button_enabled.png') : require('../assets/buttons/next_button_disabled.png')}
                    target={() => { isSelected == 'positive' ? navigation.navigate('Forest_Result') : setModalVisible(true) }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        alignItems: 'center',
        justifyContent: 'center'
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
    },
    modalText: {
        width: wp('40%'),
        resizeMode: 'contain'
    },
    modalButtonContainer: {
        marginTop: hp('-45%')
    },
    exitModalHeaderContainer: {
        width: wp('55%'),
        alignItems: 'flex-end',
        marginBottom: hp('12%')
    },
    exitModalBackgroundContainer: {
        width: wp('55%'),
        height: hp('70%'),
        backgroundColor: 'white',
        marginLeft: wp('25%'),
        marginTop: hp('15%'),
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    exitTextContainer: {
        width: wp('55%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('-15%')
    },
    exitModalImage: {
        width: wp('42.3%'),
        height: hp('27.5%'),
        marginTop: hp('-5%')
    },
    exitModalText: {
        width: wp('40%'),
        resizeMode: 'contain'
    },
    exitModalButtonContainer: {
        width: wp('30%'),
        height: hp('20%'),
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    nestedContainer: {
        width: wp('60%'),
        height: hp('35%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('30%')
    },
    nestedImage: {
        width: wp('53.8%'),
        height: hp('35%'),
        resizeMode: 'cover'
    },
    button: {
        width: wp('28%'),
        height: hp('20%')
    },
    buttonPressed: {
        width: wp('25%'),
        height: hp('15%')
    },
    buttonContainer: {
        width: wp('80%'),
        height: hp('10%'),
        marginTop: hp('15%'),
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    iconButtonContainer: {
        width: wp('40%'),
        height: hp('10%'),
        flexDirection: 'row'
    },
    nextButtonContainer: {
        width: wp('30%'),
        height: hp('10%')
    },
})

export default Forest_Quiz;