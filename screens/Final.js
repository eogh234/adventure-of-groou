import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import CustomButton from "../components/CustomButton";
import FinalBackground from "../components/FinalBackground";
import IconButton from "../components/IconButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";

const Final = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <FinalBackground />
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    src={require('../assets/buttons/next_button_enabled.png')}
                // target={() => { navigation.navigate('Video') }}
                />
                <View style={styles.homeButton}>
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
        width: wp('25%'),
        height: hp('10%'),
        marginTop: hp('80%'),
        flexDirection: 'row'
    },
    homeButton: {
        marginLeft: wp('12%')
    }
})

export default Final;