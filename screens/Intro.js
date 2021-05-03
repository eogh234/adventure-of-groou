import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import IntroBackground from "../components/IntroBackground";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";

const Intro = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <IntroBackground />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    src={require('../assets/buttons/good_button.png')}
                    target={() => { navigation.navigate('Sky_Map')}}
                />
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
        width: wp('25%'),
        height: hp('10%'),
        marginTop: hp('80%'),
    }
})

export default Intro;