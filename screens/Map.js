import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import IconButton from "../components/IconButton";
import MapBackground from "../components/MapBackground";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";

const Map = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <MapBackground map='sky' />
            </View>
            <View style={styles.headerContainer}>
                <View style={styles.backButton}>
                    <IconButton src={require('../assets/buttons/back_button.png')} target={() => { console.log("BACK!!") }} />
                </View>
                <View style={styles.homeButton}>
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { console.log("POP UP!!") }} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={0.5}
                // onPress={() => {navigation.navigate('Sky_Intro')}}
                >
                    <Image
                        style={styles.touchpoint}
                        source={require('../assets/buttons/touchpoint.gif')}
                    />
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
        height: hp('20%')
    },
    headerContainer:{
        width: wp('80%'),
        height: hp('10%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('3%'),
    },
    homeButton: {
        width: wp('13%'),
        height: hp('10%')
    },
    backButton: {
        width: wp('13%'),
        height: hp('10%')
    },
})

export default Map;