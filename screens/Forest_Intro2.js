import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import ForestIntro2Background from "../components/ForestIntro2Background";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import LottieView from 'lottie-react-native';

const Forest_Intro = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <ForestIntro2Background />
            </View>
            <View style={styles.nestedContainer}>
                <ImageBackground style={styles.nestedImage} source={require('../assets/backgrounds/forest_intro2_nested_background.png')}>
                    <LottieView
                        style={styles.tempImage}
                        source={require('../assets/json/temperature.json')}
                        autoPlay={true}
                        loop={false}
                    />
                </ImageBackground>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.nextButtonContainer}>
                    <CustomButton
                        src={require('../assets/buttons/next_button_enabled.png')}
                        target={() => {
                            navigation.navigate('Forest_Content');
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
    tempImage: {
        width: wp('15%'),
        height: hp('30%'),
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
        height: hp('43%'),
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain'
    },
    buttonContainer: {
        width: wp('80%'),
        height: hp('10%'),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: hp('5%')
    },
    nextButtonContainer: {
        width: wp('30%'),
        height: hp('10%')
    },
})

export default Forest_Intro;