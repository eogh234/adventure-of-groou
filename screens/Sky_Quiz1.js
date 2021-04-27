import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, ToastAndroid, View } from "react-native";
import { DraxProvider, DraxView } from "react-native-drax";
import CustomButton from "../components/CustomButton";
import IconButton from "../components/IconButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import SkyQuiz1Background from "../components/SkyQuiz1Background";

const Sky_Quiz1 = () => {
    const navigation = useNavigation();
    const [text, setText] = useState(0);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isDropped, setIsDropped] = useState(false);
    const [draggable, setDraggable] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <SkyQuiz1Background />
            </View>
            {/* <View style={styles.textContatiner}>
                <Image style={styles.textImage} source={require('../assets/texts/sky_quiz_1.png')} />
            </View> */}
            <View style={styles.nestedContainer}>
                <DraxProvider>
                    <ImageBackground style={styles.nestedImage} source={require('../assets/backgrounds/sky_quiz1_nested_background.png')}>
                        {isHover ?
                            <View style={styles.receiverContainer_hover}>
                                <DraxView
                                    style={styles.receiver}
                                    onReceiveDragEnter={() => { setIsHover(true); }}
                                    onReceiveDragExit={() => { setIsHover(false); }}
                                    onReceiveDragDrop={() => {
                                        if (draggable == 'TREE') {
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
                                    {isDropped && draggable == 'TREE' ? <ImageBackground style={styles.receiverImage} source={require('../assets/icons/tree_icon.png')} /> : null}
                                    {isDropped && draggable == 'CAR' ? <ImageBackground style={styles.receiverImage} source={require('../assets/icons/car_icon.png')} /> : null}
                                    {isDropped && draggable == 'FACTORY' ? <ImageBackground style={styles.receiverImage} source={require('../assets/icons/factory_icon.png')} /> : null}
                                </DraxView>
                            </View>
                            :
                            <View style={styles.receiverContainer}>
                                <DraxView
                                    style={styles.receiver}
                                    onReceiveDragEnter={() => { setIsHover(true); }}
                                    onReceiveDragExit={() => { setIsHover(false); }}
                                    onReceiveDragDrop={() => {
                                        if (draggable == 'TREE') {
                                            setIsCorrect(true);
                                        } else {
                                            setIsCorrect(false);
                                        }
                                    }}
                                >
                                    {isDropped && draggable == 'TREE' ? <ImageBackground style={styles.receiverImage} source={require('../assets/icons/tree_icon.png')} /> : null}
                                    {isDropped && draggable == 'CAR' ? <ImageBackground style={styles.receiverImage} source={require('../assets/icons/car_icon.png')} /> : null}
                                    {isDropped && draggable == 'FACTORY' ? <ImageBackground style={styles.receiverImage} source={require('../assets/icons/factory_icon.png')} /> : null}
                                </DraxView>
                            </View>
                        }
                        <View style={styles.draggableContainer}>
                            {isDropped && draggable == 'TREE' ? <View style={styles.receiver}/> : <DraxView
                                style={styles.draggableTree}
                                onDragStart={() => {
                                    setDraggable('TREE');
                                    setIsDropped(false);
                                }}
                            >
                                <ImageBackground style={styles.draggableImage} source={require('../assets/icons/tree_icon.png')} />
                            </DraxView>}
                            {isDropped && draggable == 'CAR' ? <View style={styles.carEmptyContainer}/> : <DraxView
                                style={styles.draggableCar}
                                onDragStart={() => {
                                    setDraggable('CAR');
                                    setIsDropped(false);
                                }}
                            >
                                <ImageBackground style={styles.draggableImage} source={require('../assets/icons/car_icon.png')} />
                            </DraxView>}
                            {isDropped && draggable == 'FACTORY' ? <View style={styles.factoryEmptyContainer}/> : <DraxView
                                style={styles.draggableFactory}
                                onDragStart={() => {
                                    setDraggable('FACTORY');
                                    setIsDropped(false);
                                }}
                            >
                                <ImageBackground style={styles.draggableImage} source={require('../assets/icons/factory_icon.png')} />
                            </DraxView>}
                        </View>
                    </ImageBackground>
                </DraxProvider>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.iconButtonContainer}>
                    <IconButton src={require('../assets/buttons/back_button.png')} target={() => { navigation.goBack(); }} />
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { console.log("POP UP!!") }} />
                </View>
                <View style={styles.nextButtonContainer}>
                    {isDropped ?
                        <CustomButton
                            src={require('../assets/buttons/next_button_enabled.png')}
                            target={() => {
                                // navigation.navigate('Sky_Result1');
                                isCorrect ? console.log("정답!") : console.log("오답!!")
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
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    textContatiner: {
        marginTop: hp('15%')
    },
    textImage: {
        width: wp('75%'),
        height: hp('10%')
    },
    nestedContainer: {
        width: wp('80%'),
        height: hp('50%'),
        marginTop: hp('30%'),
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
        width: wp('80%'),
        height: hp('20%'),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    factoryContainer: {
        width: wp('80%'),
        height: hp('20%'),
        flexDirection: 'row',
    },
    draggableTree: {
        width: wp('22%'),
        height: hp('15%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('5%')
    },
    draggableCar: {
        width: wp('22%'),
        height: hp('15%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: wp('5%'),
        marginBottom: hp('5%')
    },
    draggableFactory: {
        width: wp('22%'),
        height: hp('15%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('5%')
    },
    receiverContainer: {
        width: wp('75%'),
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp('6%')
    },
    receiverContainer_hover: {
        width: wp('75%'),
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp('6%'),
        opacity: 0.5
    },
    receiver: {
        width: wp('24%'),
        height: hp('16%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    carEmptyContainer: {
        width: wp('28%'),
        height: hp('16%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    factoryEmptyContainer: {
        width: wp('20%'),
        height: hp('16%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    receiver: {
        width: wp('26%'),
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
        marginTop: hp('5%'),
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

export default Sky_Quiz1;