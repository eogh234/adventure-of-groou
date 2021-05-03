import { useNavigation } from "@react-navigation/core";
import LottieView from 'lottie-react-native';
import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import IconButton from "../components/IconButton";
import SkyMapBackground from "../components/SkyMapBackground";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";

const Sky_Map = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <SkyMapBackground />
            </View>
            <View style={styles.headerContainer}>
                <View style={styles.homeButton}>
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { console.log("POP UP!!") }} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => { navigation.navigate('Sky_Intro') }}
                >
                    {/* <LottieView
                        style={styles.touchpoint}
                        source={require('../assets/json/touchpoint.json')}
                        autoPlay={true}
                        loop={true}
                    /> */}
                    <ImageBackground style={styles.touchpoint} source={require('../assets/json/touchpoint.gif')}/>
                </TouchableOpacity>
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
    buttonContainer: {
        width: wp('30%'),
        height: hp('20%'),
        marginTop: hp('10%'),
        marginRight: wp('25%')
    },
    touchpoint: {
        width: wp('30%'),
        height: hp('20%'),
        opacity: 0.8,
    },
    headerContainer: {
        width: wp('80%'),
        height: hp('10%'),
        justifyContent: 'flex-end',
        marginTop: hp('3%'),
    },
    homeButton: {
        width: wp('13%'),
        height: hp('10%')
    },
})

export default Sky_Map;