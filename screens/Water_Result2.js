import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, Modal, StyleSheet, ToastAndroid, View } from "react-native";
import CustomButton from "../components/CustomButton";
import IconButton from "../components/IconButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import WaterResult2Background from "../components/WaterResult2Background";
import LottieView from 'lottie-react-native';
import ExitButton from "../components/ExitButton";

const Water_Result2 = () => {
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
                <WaterResult2Background />
            </View>
            {/* <LottieView
                style={styles.nestedImage}
                source={require('../assets/json/water_result2_fish.json')}
                autoPlay={true}
                loop={true}
            /> */}
            <View style={styles.buttonContainer}>
                <View style={styles.iconButtonContainer}>
                    <IconButton src={require('../assets/buttons/back_button.png')} target={() => { navigation.goBack() }} />
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { setModalVisible(true) }} />
                </View>
                <View style={styles.nextButtonContainer}>
                    <CustomButton
                        src={require('../assets/buttons/next_button_enabled.png')}
                        target={() => {
                            navigation.navigate('Water_Final');
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
        justifyContent: 'flex-end'
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
    nestedContainer: {
        width: wp('80%'),
        height: hp('50%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('25%')
    },
    nestedImage: {
        width: wp('75%'),
        height: hp('85'),
    },
    buttonContainer: {
        width: wp('80%'),
        height: hp('15%'),
        flexDirection: 'row',
        justifyContent: 'space-around'
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

export default Water_Result2;