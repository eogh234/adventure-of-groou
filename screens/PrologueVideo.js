import { useNavigation } from "@react-navigation/core";
import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Video } from 'expo-av'
import { useEffect } from "react";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../components/Responsive";

const PrologueVideo = () => {
    const navigation = useNavigation();
    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [isFirst, setIsFirst] = useState(true)
    useEffect(() => {
        if (isFirst) {
            setIsFirst(false)
        }
        if (!isFirst && !status.isPlaying) {
            navigation.navigate('Main')
        }
    }, [status])
    return (
        <View style={styles.container}>
            <View style={styles.videoContainer}>
                <Video
                    ref={video}
                    style={styles.video}
                    source={require('../assets/videos/adventure_prologue.mp4')}
                    resizeMode={Video.RESIZE_MODE_COVER}
                    rate={1.0}
                    isMuted={false}
                    volume={1.0}
                    shouldPlay
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('-10%')
    },
    video: {
        flex: 1,
    },
    videoContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})

export default PrologueVideo;