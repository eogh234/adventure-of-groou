import { useNavigation } from "@react-navigation/core";
import LottieView from 'lottie-react-native';
import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import IconButton from "../components/IconButton";
import ForestMapBackground from "../components/ForestMapBackground";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";

const Forest_Map = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <ForestMapBackground />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => { navigation.navigate('Forest_Intro1') }}
                >
                    <LottieView
                        style={styles.touchpoint}
                        source={require('../assets/json/touchpoint.json')}
                        autoPlay={true}
                        loop={true}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.headerContainer}>
                <View style={styles.iconButtonContainer}>
                    <IconButton src={require('../assets/buttons/back_button.png')} target={() => { console.log("BACK!!") }} />
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { console.log("POP UP!!") }} />
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
    buttonContainer: {
        width: wp('30%'),
        height: hp('20%'),
        marginTop: hp('45%'),
        marginLeft: wp('30%')
    },
    touchpoint: {
        width: wp('30.9%'),
        height: hp('20%'),
        opacity: 0.8,
    },
    headerContainer: {
        width: wp('100%'),
        height: hp('10%'),
        marginTop: hp('20%'),
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    iconButtonContainer: {
        width: wp('40%'),
        height: hp('10%'),
        flexDirection: 'row'
    },
})

export default Forest_Map;