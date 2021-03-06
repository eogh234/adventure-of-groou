import { useNavigation } from "@react-navigation/core";
import LottieView from 'lottie-react-native';
import React, { useState } from "react";
import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import IconButton from "../components/IconButton";
import FinalMapBackground from "../components/FinalMapBackground";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import ExitButton from "../components/ExitButton";
import CustomButton from "../components/CustomButton";

const Final_Map = (props) => {
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
            <TouchableOpacity
                style={styles.backgroundContainer}
                onPress={() => { navigation.navigate('Final') }}
                activeOpacity={1}>
                <View style={styles.backgroundContainer}>
                    <FinalMapBackground />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.iconButtonContainer}>
                        <IconButton src={require('../assets/buttons/back_button.png')} target={() => { navigation.goBack() }} />
                        <IconButton src={require('../assets/buttons/home_button.png')} target={() => { setModalVisible(true) }} />
                    </View>
                </View>
            </TouchableOpacity>
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
        width: wp('100%'),
        height: hp('20%'),
        marginTop: hp('85%'),
        alignItems: 'flex-end'
    },
    touchpoint: {
        width: wp('30%'),
        height: hp('20%'),
        opacity: 0.9,
    },
    iconButtonContainer: {
        width: wp('40%'),
        height: hp('10%'),
        flexDirection: 'row'
    },
})

export default Final_Map;