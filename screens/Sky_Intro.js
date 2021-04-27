import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ImageBackground, StyleSheet, ToastAndroid, View } from "react-native";
import CustomButton from "../components/CustomButton";
import IconButton from "../components/IconButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import SkyIntroBackground from "../components/SkyIntroBackground";

const Sky_Intro = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <SkyIntroBackground />
            </View>
            <View style={styles.nestedContainer}>
                <ImageBackground style={styles.nestedImage} source={require('../assets/backgrounds/sky_intro_nested_background.png')}>
                    <View style={styles.zoomContainer}>
                        <CustomButton 
                            src={require('../assets/icons/zoom_icon.png')}
                            target={() => {navigation.navigate('Sky_Content')}}
                        />
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.iconButtonContainer}>
                    <IconButton src={require('../assets/buttons/back_button.png')} target={() => { console.log("BACK!!") }} />
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { console.log("POP UP!!") }} />
                </View>
                <View style={styles.nextButtonContainer}>
                    <CustomButton
                        src={require('../assets/buttons/next_button_disabled.png')}
                        target={() => { ToastAndroid.show("돋보기를 선택해주세요", ToastAndroid.SHORT) }}
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
    zoomContainer: {
        width: wp('15%'),
        height: hp('15%')
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

export default Sky_Intro;