import { useNavigation } from "@react-navigation/core";
import LottieView from 'lottie-react-native';
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const OnBoarding = () => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backgroundContainer}
                onPress={() => { navigation.navigate('PrologueVideo') }}
                activeOpacity={1}
            >
                <LottieView
                    style={styles.backgroundImage}
                    source={require('../assets/json/onBoarding.json')}
                    autoPlay={true}
                    loop={true}
                />
                <TouchableOpacity
                    style={styles.productContainer}
                    onPress={() => { navigation.navigate('ProductionIntro') }}
                    activeOpacity={1}
                >
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row-reverse'
    },
    productContainer: {
        flex: 0.5
    },
    backgroundImage: {
        flex: 1,
    },
})

export default OnBoarding;