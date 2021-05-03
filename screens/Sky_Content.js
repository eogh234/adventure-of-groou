import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, ToastAndroid, View } from "react-native";
import CustomButton from "../components/CustomButton";
import IconButton from "../components/IconButton";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";
import SkyContentBackground from "../components/SkyContentBackground";
import LottieView from 'lottie-react-native';

const Sky_Content = () => {
    const navigation = useNavigation();
    const [text, setText] = useState(0);

    const textUrl = [
        {
            url: require('../assets/texts/sky_content_0.png'),
            textStyle: styles.textImage1
        },
        {
            url: require('../assets/texts/sky_content_1.png'),
            textStyle: styles.textImage2
        },
        {
            url: require('../assets/texts/sky_content_2.png'),
            textStyle: styles.textImage3
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer}>
                <SkyContentBackground />
            </View>
            <View style={styles.textContatiner}>
                <Image style={textUrl[text].textStyle} source={textUrl[text].url} />
            </View>
            <View style={styles.nestedContainer}>
                {/* <LottieView
                    style={styles.nestedImage} 
                    source={require('../assets/json/sky_dust.json')} 
                    autoPlay={true}
                    loop={true}
                /> */}
                <ImageBackground style={styles.nestedImage} source={require('../assets/json/sky_dust.gif')}/>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.iconButtonContainer}>
                    <IconButton src={require('../assets/buttons/back_button.png')} target={() => { console.log("BACK!!") }} />
                    <IconButton src={require('../assets/buttons/home_button.png')} target={() => { console.log("POP UP!!") }} />
                </View>
                <View style={styles.nextButtonContainer}>
                    <CustomButton
                        src={require('../assets/buttons/next_button_enabled.png')}
                        target={() => {
                            if (text < 2) {
                                setText(text + 1);
                            } else {
                                navigation.navigate('Sky_Quiz1');
                            }
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
        width: wp('70%'),
        marginTop: hp('15%'),
    },
    textImage1: {
        width: wp('60%'),
        height: hp('10%')
    },
    textImage2: {
        width: wp('55%'),
        height: hp('13%')
    },
    textImage3: {
        width: wp('40%'),
        height: hp('10%')
    },
    nestedContainer: {
        width: wp('80%'),
        height: hp('50%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    nestedImage: {
        width: wp('75%'),
        height: hp('50%'),
    },
    buttonContainer: {
        width: wp('80%'),
        height: hp('10%'),
        marginTop: hp('5%'),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconButtonContainer: {
        width: wp('40%'),
        height: hp('10%'),
        flexDirection: 'row'
    },
    nextButtonContainer: {
        width: wp('20%'),
        height: hp('10%')
    },
})

export default Sky_Content;