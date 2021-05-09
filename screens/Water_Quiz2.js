import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, ImageBackground, Modal, StyleSheet, ToastAndroid, View } from "react-native";
import { DraxProvider, DraxView } from "react-native-drax";
import CustomButton from "../components/CustomButton";
import IconButton from "../components/IconButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import WaterQuiz2Background from "../components/WaterQuiz2Background";
import LottieView from 'lottie-react-native';
import ExitButton from "../components/ExitButton";

const Water_Quiz2 = () => {
    const navigation = useNavigation();
    const [text, setText] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isDropped, setIsDropped] = useState(false);
    const [draggable, setDraggable] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [exitModalVisible, setExitModalVisible] = useState(false);

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
                <WaterQuiz2Background />
            </View>
            <View style={styles.nestedContainer}>
                <DraxProvider>
                    {isHover ?
                        <View style={styles.receiverContainer_hover}>
                            <DraxView
                                style={styles.receiver}
                                onReceiveDragEnter={() => { setIsHover(true); }}
                                onReceiveDragExit={() => { setIsHover(false); }}
                                onReceiveDragDrop={() => {
                                    if (draggable == 'FISH') {
                                        setIsCorrect(true);
                                        setIsHover(false);
                                        setIsDropped(true);
                                    } else {
                                        setIsCorrect(false);
                                        setIsHover(false);
                                        setIsDropped(true);
                                    }
                                }}
                            >
                                {isDropped && draggable == 'ELEPHANT' ? <ImageBackground style={styles.receiverImage} source={require('../assets/icons/elephant_icon.png')} /> : null}
                                {isDropped && draggable == 'FISH' ? <ImageBackground style={styles.receiverImage} source={require('../assets/icons/fish_icon.png')} /> : null}
                            </DraxView>
                        </View>
                        :
                        <View style={styles.receiverContainer}>
                            <DraxView
                                style={styles.receiver}
                                onReceiveDragEnter={() => { setIsHover(true); }}
                                onReceiveDragExit={() => { setIsHover(false); }}
                                onReceiveDragDrop={() => {
                                    if (draggable == 'FISH') {
                                        setIsCorrect(true);
                                    } else {
                                        setIsCorrect(false);
                                    }
                                }}
                            >
                                {isDropped && draggable == 'ELEPHANT' ? <ImageBackground style={styles.receiverImage} source={require('../assets/icons/elephant_icon.png')} /> : null}
                                {isDropped && draggable == 'FISH' ? <ImageBackground style={styles.receiverImage} source={require('../assets/icons/fish_icon.png')} /> : null}
                            </DraxView>
                        </View>
                    }
                    <View style={styles.draggableContainer}>
                        {isDropped && draggable == 'ELEPHANT' ? <View style={styles.receiver} /> : <DraxView
                            style={styles.draggableElephant}
                            onDragStart={() => {
                                setDraggable('ELEPHANT');
                                setIsDropped(false);
                            }}
                        >
                            <ImageBackground style={styles.draggableImage} source={require('../assets/icons/elephant_icon.png')} />
                        </DraxView>}
                        {isDropped && draggable == 'FISH' ? <View style={styles.FishEmptyContainer} /> : <DraxView
                            style={styles.draggableFish}
                            onDragStart={() => {
                                setDraggable('FISH');
                                setIsDropped(false);
                            }}
                        >
                            <ImageBackground style={styles.draggableImage} source={require('../assets/icons/fish_icon.png')} />
                        </DraxView>}
                    </View>
                </DraxProvider>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.iconButtonContainer}>
                    <IconButton src={require('../assets/buttons/back_button.png')} target={() => { navigation.goBack(); }} />
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { setExitModalVisible(true) }} />
                </View>
                <View style={styles.nextButtonContainer}>
                    {isDropped ?
                        <CustomButton
                            src={require('../assets/buttons/next_button_enabled.png')}
                            target={() => {
                                isCorrect ? navigation.navigate('Water_Result2') : setModalVisible(true)
                            }}
                        /> :
                        <CustomButton
                            src={require('../assets/buttons/next_button_disabled.png')}
                            target={() => { ToastAndroid.show("정답을 드래그 해주세요", ToastAndroid.SHORT) }}
                        />
                    }
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
        width: wp('80%'),
        height: hp('50%'),
        marginTop: hp('35%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    nestedImage: {
        width: wp('75%'),
        height: hp('45%'),
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    draggableContainer: {
        width: wp('75%'),
        height: hp('40%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    draggableElephant: {
        width: wp('20%'),
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    draggableFish: {
        width: wp('22%'),
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp('2%'),
    },
    receiverContainer: {
        width: wp('75%'),
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    receiverContainer_hover: {
        width: wp('75%'),
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5
    },
    receiver: {
        width: wp('24%'),
        height: hp('16%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    fishEmptyContainer: {
        width: wp('40%'),
        height: hp('16%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    receiverImage: {
        width: wp('32%'),
        height: hp('22%')
    },
    draggableImage: {
        width: wp('30%'),
        height: hp('20%')
    },
    buttonContainer: {
        width: wp('80%'),
        height: hp('10%'),
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
    iconArea: {
        width: wp('25%'),
        height: hp('15%'),
        marginTop: hp('25%'),
    }
})

export default Water_Quiz2;