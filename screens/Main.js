import { useNavigation } from "@react-navigation/core";
import LottieView from 'lottie-react-native';
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import IconButton from "../components/IconButton";
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
                <LottieView
                    style={styles.backgroundImage}
                    source={require('../assets/json/main_background.json')}
                    autoPlay={true}
                    loop={true}
                />
            </TouchableOpacity>
            <View style={styles.homeButton}>
                <IconButton src={require('../assets/buttons/home_button.png')} target={() => { console.log("POP UP!!") }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    backgroundImage: {
        flex: 1,
    },
    homeButton: {
        width: wp('13%'),
        height: hp('10%'),
        marginTop: hp('5%'),
        marginLeft: wp('75%'),
    }
})

export default Main;