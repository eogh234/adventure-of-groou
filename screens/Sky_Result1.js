import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { StyleSheet, ToastAndroid, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import SkyResult1Background from "../components/SkyResult1Background";

const Sky_Result1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <SkyResult1Background />
            </View>
            {/* <View style={styles.textContatiner}>
                <Image style={styles.textImage} source={require('../assets/texts/sky_quiz_1.png')} />
            </View> */}
            <View style={styles.buttonContainer}>
                <View style={styles.nextButtonContainer}>
                    <CustomButton
                        src={require('../assets/buttons/next_button_enabled.png')}
                        target={() => {
                            navigation.navigate('Sky_Quiz2');
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
    textContatiner: {
        marginTop: hp('15%')
    },
    textImage: {
        width: wp('75%'),
        height: hp('10%')
    },
    buttonContainer: {
        width: wp('80%'),
        height: hp('10%'),
        marginTop: hp('85%'),
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    nextButtonContainer: {
        width: wp('30%'),
        height: hp('10%')
    },
})

export default Sky_Result1;