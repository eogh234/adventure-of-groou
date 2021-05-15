import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, Modal, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import ExitButton from "../components/ExitButton";
import FinalBackground from "../components/FinalBackground";
import IconButton from "../components/IconButton";
import ModalButton from "../components/ModalButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";

const Final = () => {
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
                        <ModalButton
                            style={styles.exitButton}
                            src={require('../assets/buttons/exit_button.png')}
                            target={() => { setModalVisible(false); navigation.navigate("OnBoarding") }}
                        />
                        <ModalButton
                            style={styles.continueButton}
                            src={require('../assets/buttons/continue_button.png')}
                            target={() => { setModalVisible(false) }}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.backgroundContainer}>
                <FinalBackground />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    src={require('../assets/buttons/next_button_enabled.png')}
                    target={() => { navigation.navigate('EpilogueVideo') }}
                />
                <View style={styles.homeButton}>
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { setModalVisible(true) }} />
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
        width: wp('45%'),
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    modalBackgroundContainer: {
        width: wp('55%'),
        height: hp('70%'),
        backgroundColor: 'white',
        marginLeft: wp('25%'),
        marginTop: hp('10%'),
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
        width: wp('46%'),
        height: hp('28%'),
        marginTop: hp('-10%'),
        resizeMode: 'contain'
    },
    modalText: {
        width: wp('40%'),
        resizeMode: 'contain'
    },
    modalButtonContainer: {
        width: wp('30%'),
        height: hp('20%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        width: wp('25%'),
        height: hp('10%'),
        marginTop: hp('80%'),
        flexDirection: 'row'
    },
    homeButton: {
        marginLeft: wp('15%'),
        marginTop: hp('5%')
    }
})

export default Final;