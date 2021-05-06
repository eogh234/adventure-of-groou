import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "./Responsive";

const ExitButton = (props) => {
    const [isPress, setIsPress] = useState(false);

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPressIn={() => setIsPress(true)}
            onPressOut={() => setIsPress(false)}
            onPress={props.target}
        >
            <Image
                style={isPress ? styles.buttonImagePressed : styles.buttonImage}
                source={props.src}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: wp('6%'),
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: wp('3%')
    },
    buttonPressed: {
        width: wp('5%'),
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: wp('3%')
    },
    buttonImage: {
        width: wp('6%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },
    buttonImagePressed: {
        width: wp('4%'),
        height: hp('5%'),
        resizeMode: 'contain'
    },
})

export default ExitButton;