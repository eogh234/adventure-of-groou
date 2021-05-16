import { useNavigation } from "@react-navigation/core";
import { Video } from "expo-av";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../components/Responsive";

const EpilogueVideo = () => {
  const navigation = useNavigation();
  const video = useRef(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={() => { navigation.navigate('OnBoarding') }}
        activeOpacity={0.5}>
        <Video
          ref={video}
          style={styles.video}
          source={require("../assets/videos/adventure_epilogue.mp4")}
          resizeMode={Video.RESIZE_MODE_COVER}
          rate={1.0}
          isMuted={false}
          volume={1.0}
          shouldPlay
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("-10%"),
  },
  video: {
    flex: 1,
  },
  videoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row-reverse",
  },
  backgroundImage: {
    flex: 1,
  },
});

export default EpilogueVideo;
