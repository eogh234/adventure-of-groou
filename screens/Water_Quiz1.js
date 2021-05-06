import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, ImageBackground, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react/cjs/react.development";
import CustomButton from "../components/CustomButton";
import ExitButton from "../components/ExitButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import WaterQuiz1Background from "../components/WaterQuiz1Background";
import LottieView from 'lottie-react-native';

const Water_Quiz1 = () => {
    const navigation = useNavigation();
    const [isSelected, setIsSelected] = useState('');
    const [isPositivePress, setIsPositivePress] = useState(false);
    const [isNegativePress, setIsNegativePress] = useState(false);
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
                <WaterQuiz1Background />
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
                <CustomButton
                    src={isSelected ? require('../assets/buttons/next_button_enabled.png') : require('../assets/buttons/next_button_disabled.png')}
                    target={() => { isSelected == 'negative' ? navigation.navigate('Water_Result1') : setModalVisible(true) }}
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
        borderRadius: 45
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
        marginLeft: wp('-3%')
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
        width: wp('60%'),
        height: hp('35%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('30%')
    },
    nestedImage: {
        width: wp('53.8%'),
        height: hp('35%'),
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
        justifyContent: 'flex-end'
    },
    nextButtonContainer: {
        width: wp('30%'),
        height: hp('10%')
    },
})

export default Water_Quiz1;