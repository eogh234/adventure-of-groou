import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Audio } from "expo-av";
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  ToastAndroid,
  View,
} from "react-native";
import CustomButton from "../components/CustomButton";
import ExitButton from "../components/ExitButton";
import IconButton from "../components/IconButton";
import ModalButton from "../components/ModalButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../components/Responsive";
import SkyIntroBackground from "../components/SkyIntroBackground";

const Sky_Intro = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalBackgroundContainer}>
          <View style={styles.textContainer}>
            <Image
              style={styles.modalText}
              source={require("../assets/texts/exit_text.png")}
            />
          </View>
          <View style={styles.modalContent}>
            <Image
              style={styles.modalImage}
              source={require("../assets/backgrounds/modal_nested_background.png")}
            />
          </View>
          <View style={styles.modalButtonContainer}>
            <ModalButton
              style={styles.exitButton}
              src={require("../assets/buttons/exit_button.png")}
              target={() => {
                setModalVisible(false);
                navigation.navigate("OnBoarding");
              }}
            />
            <ModalButton
              style={styles.continueButton}
              src={require("../assets/buttons/continue_button.png")}
              target={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.backgroundContainer}>
        <SkyIntroBackground />
      </View>
      <View style={styles.nestedContainer}>
        <ImageBackground
          style={styles.nestedImage}
          source={require("../assets/backgrounds/sky_intro_nested_background.png")}
        >
          <View style={styles.zoomContainer}>
            <CustomButton
              src={require("../assets/icons/zoom_icon.png")}
              target={() => {
                navigation.navigate("Sky_Content1");
              }}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.iconButtonContainer}>
          <IconButton
            src={require("../assets/buttons/back_button.png")}
            target={() => {
              navigation.goBack();
            }}
          />
          <IconButton
            src={require("../assets/buttons/home_button.png")}
            target={() => {
              setModalVisible(true);
            }}
          />
        </View>
        <View style={styles.nextButtonContainer}>
          <CustomButton
            src={require("../assets/buttons/next_button_disabled.png")}
            target={() => {
              ToastAndroid.show("???????????? ??????????????????", ToastAndroid.SHORT);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("100%"),
    alignItems: "center",
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalHeaderContainer: {
    width: wp("45%"),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  modalBackgroundContainer: {
    width: wp("55%"),
    height: hp("60%"),
    backgroundColor: "white",
    marginLeft: wp("23%"),
    marginTop: hp("15%"),
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginTop: hp("4%"),
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    width: wp("46%"),
    height: hp("28%"),
    marginTop: hp("-1%"),
    resizeMode: "contain",
  },
  modalText: {
    width: wp("40%"),
    resizeMode: "contain",
  },
  modalButtonContainer: {
    width: wp("30%"),
    height: hp("20%"),
    marginTop: hp("-2%"),
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: wp("35%"),
    height: hp("22%"),
    marginTop: hp("25%"),
    marginRight: wp("25%"),
    alignItems: "center",
    justifyContent: "center",
  },
  nestedContainer: {
    width: wp("80%"),
    height: hp("50%"),
    marginTop: hp("27%"),
    alignItems: "center",
    justifyContent: "center",
  },
  nestedImage: {
    width: wp("68%"),
    height: hp("34%"),
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  zoomContainer: {
    width: wp("15%"),
    height: hp("15%"),
  },
  buttonContainer: {
    width: wp("80%"),
    height: hp("10%"),
    marginTop: hp("0%"),
    marginLeft: wp("-6%"),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButtonContainer: {
    width: wp("40%"),
    height: hp("10%"),
    flexDirection: "row",
  },
  nextButtonContainer: {
    width: wp("20%"),
    height: hp("10%"),
  },
});

export default Sky_Intro;
