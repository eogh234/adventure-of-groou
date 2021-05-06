import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ImageBackground, StyleSheet, ToastAndroid, View } from "react-native";
import CustomButton from "../components/CustomButton";
import IconButton from "../components/IconButton";
import NextButton from "../components/NextButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import ForestFinalBackground from "../components/ForestFinalBackground";

const Forest_Final = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <ForestFinalBackground />
            </View>
            <View style={styles.nestedContainer}>
                <ImageBackground style={styles.nestedImage} source={require('../assets/backgrounds/forest_final_nested_background.png')} />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.nextButtonContainer}>
                    <NextButton
                        src={require('../assets/buttons/next_area_button_enabled.png')}
                        target={() => { navigation.navigate('Water_Map') }}
                    />
                </View>
                <CustomButton
                    src={require('../assets/buttons/next_area_button_disabled.png')}
                    target={() => { ToastAndroid.show("SKIP", ToastAndroid.SHORT) }}
                />
                <View style={styles.headerContainer}>
                    <View style={styles.homeButton}>
                        <IconButton src={require('../assets/buttons/home_button.png')} target={() => { console.log("POP UP!!") }} />
                    </View>
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
        justifyContent: 'center'
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    headerContainer: {
        width: wp('80%'),
        height: hp('25%'),
        alignItems: 'flex-end',
    },
    homeButton: {
        width: wp('13%'),
        height: hp('10%')
    },
    nestedContainer: {
        width: wp('60%'),
        height: hp('35%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('25%')
    },
    nestedImage: {
        width: wp('53.8%'),
        height: hp('35%'),
    },
    buttonContainer: {
        width: wp('80%'),
        height: hp('20%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('15%'),
        paddingVertical: hp('8%')
    },
    nextButtonContainer: {
        paddingLeft: wp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Forest_Final;