import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "./Responsive";

const CustomButton = (props) => {
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonImage: {
        width: wp('25%'),
        height: hp('10%'),
        resizeMode: 'contain'
    },
    buttonImagePressed: {
        width: wp('20%'),
        height: hp('8%'),
        resizeMode: 'contain'
    },
})

export default CustomButton;