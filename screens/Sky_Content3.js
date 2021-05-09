import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, ImageBackground, Modal, StyleSheet, ToastAndroid, View } from "react-native";
import CustomButton from "../components/CustomButton";
import IconButton from "../components/IconButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import SkyContent3Background from "../components/SkyContent3Background";
import LottieView from 'lottie-react-native';
import ExitButton from "../components/ExitButton";

const Sky_Content = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    
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
                        <Image style={styles.modalText} source={require('../assets/texts/exit_text.png')} />
                    </View>
                    <View style={styles.modalContent}>
                        <Image
                            style={styles.modalImage}
                            source={require('../assets/backgrounds/modal_nested_background.png')}
                        />
                    </View>
                    <View style={styles.modalButtonContainer}>
                        <CustomButton
                            style={styles.exitButton}
                            src={require('../assets/buttons/exit_button.png')}
                            target={() => { setModalVisible(false); navigation.navigate("OnBoarding") }}
                        />
                        <CustomButton
                            style={styles.continueButton}
                            src={require('../assets/buttons/continue_button.png')}
                            target={() => { setModalVisible(false) }}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.backgroundContainer}>
                <SkyContent3Background />
            </View>
            <View style={styles.nestedContainer}>
                <ImageBackground style={styles.nestedImage} source={require('../assets/json/sky_dust.gif')}/>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.iconButtonContainer}>
                    <IconButton src={require('../assets/buttons/back_button.png')} target={() => { navigation.goBack() }} />
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { setModalVisible(true) }} />
                </View>
                <View style={styles.nextButtonContainer}>
                    <CustomButton
                        src={require('../assets/buttons/next_button_enabled.png')}
                        target={() => {
                            navigation.navigate('Sky_Quiz1')
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
    modalHeaderContainer: {
        width: wp('55%'),
        alignItems: 'flex-end',
        marginBottom: hp('12%')
    },
    modalBackgroundContainer: {
        width: wp('55%'),
        height: hp('70%'),
        backgroundColor: 'white',
        marginLeft: wp('25%'),
        marginTop: hp('15%'),
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        width: wp('55%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('-15%')
    },
    modalImage: {
        width: wp('42.3%'),
        height: hp('27.5%'),
        marginTop: hp('-5%')
    },
    modalText: {
        width: wp('40%'),
        resizeMode: 'contain'
    },
    modalButtonContainer: {
        width: wp('30%'),
        height: hp('20%'),
    },
    buttonContainer: {
        width: wp('35%'),
        height: hp('22%'),
        marginTop: hp('25%'),
        marginRight: wp('25%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    nestedContainer: {
        width: wp('80%'),
        height: hp('50%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('25%')
    },
    nestedImage: {
        width: wp('75%'),
        height: hp('50%'),
    },
    buttonContainer: {
        width: wp('80%'),
        height: hp('10%'),
        marginTop: hp('10%'),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconButtonContainer: {
        width: wp('40%'),
        height: hp('10%'),
        flexDirection: 'row'
    },
    nextButtonContainer: {
        width: wp('20%'),
        height: hp('10%')
    },
})

export default Sky_Content;