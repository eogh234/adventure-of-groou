import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import IconButton from "../components/IconButton";
import MainBackground from "../components/MainBackground";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";

const Main = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backgroundContainer}
                onPress={() => { navigation.navigate('Intro') }}
                activeOpacity={1}
            >
                <MainBackground />
            </TouchableOpacity>
            <View style={styles.homeButton}>
                <IconButton src={require('../assets/buttons/home_button.png')} target={() => { console.log("POP UP!!") }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    homeButton: {
        width: wp('13%'),
        height: hp('10%'),
        marginTop: hp('5%'),
        marginLeft: wp('75%'),
    }
})

export default Main;