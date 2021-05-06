import { useNavigation } from "@react-navigation/core";
import LottieView from 'lottie-react-native';
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import IconButton from "../components/IconButton";
import FinalMapBackground from "../components/FinalMapBackground";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";

const Final_Map = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backgroundContainer}
                onPress={() => { navigation.navigate('Final') }}
                activeOpacity={1}>
                <View style={styles.backgroundContainer}>
                    <FinalMapBackground />
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.iconButtonContainer}>
                        <IconButton src={require('../assets/buttons/back_button.png')} target={() => { console.log("BACK!!") }} />
                        <IconButton src={require('../assets/buttons/home_button.png')} target={() => { console.log("POP UP!!") }} />
                    </View>
                </View>
            </TouchableOpacity>
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
        width: wp('100%'),
        height: hp('20%'),
        marginTop: hp('85%'),
        alignItems: 'flex-end'
    },
    touchpoint: {
        width: wp('30%'),
        height: hp('20%'),
        opacity: 0.9,
    },
    iconButtonContainer: {
        width: wp('40%'),
        height: hp('10%'),
        flexDirection: 'row'
    },
})

export default Final_Map;