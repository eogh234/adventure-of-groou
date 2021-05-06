import { useNavigation } from "@react-navigation/core";
import LottieView from 'lottie-react-native';
import React, { useState } from "react";
import { Image, Modal, StyleSheet, TouchableOpacity, View } from "react-native";
import CustomButton from "../components/CustomButton";
import ExitButton from "../components/ExitButton";
import IconButton from "../components/IconButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import RetryModalBackground from "../components/RetryModalBackground";

const Main = () => {
    const navigation = useNavigation();
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
                            src={require('../assets/buttons/exit_button.png')}
                            target={() => { setModalVisible(false); navigation.navigate("Main") }}
                        />
                        <CustomButton
                            src={require('../assets/buttons/continue_button.png')}
                            target={() => { setModalVisible(false) }}
                        />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                style={styles.backgroundContainer}
                onPress={() => { navigation.navigate('Intro') }}
                activeOpacity={1}
            >
                <LottieView
                    style={styles.backgroundImage}
                    source={require('../assets/json/main_background.json')}
                    autoPlay={true}
                    loop={true}
                />
            </TouchableOpacity>
            <View style={styles.homeButton}>
                <IconButton
                    src={require('../assets/buttons/home_button.png')}
                    target={() => { setModalVisible(true) }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        marginTop: hp('-10%')
    },
    modalImage: {
        width: wp('42.3%'),
        height: hp('27.5%'),
        marginLeft: wp('7%'),
        marginTop: hp('-3%')
    },
    modalText: {
        width: wp('40%'),
        resizeMode: 'contain'
    },
    modalButtonContainer: {
        justifyContent: 'flex-start',
    },
    backgroundImage: {
        flex: 1,
    },
    homeButton: {
        width: wp('13%'),
        height: hp('10%'),
        marginTop: hp('85%'),
        marginLeft: wp('75%'),
    }
})

export default Main;