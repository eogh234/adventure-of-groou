import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { Image, ImageBackground, Modal, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import ForestIntro2Background from "../components/ForestIntro2Background";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../components/Responsive";
import LottieView from "lottie-react-native";
import IconButton from "../components/IconButton";
import ExitButton from "../components/ExitButton";
import ModalButton from "../components/ModalButton";

const Forest_Intro = () => {
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
        <ForestIntro2Background />
      </View>
      <View style={styles.nestedContainer}>
        <ImageBackground
          style={styles.nestedImage}
          source={require("../assets/backgrounds/forest_intro2_nested_background.png")}
        >
          <LottieView
            style={styles.tempImage}
            source={require("../assets/json/temperature.json")}
            autoPlay={true}
            loop={false}
          />
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
            src={require("../assets/buttons/next_button_enabled.png")}
            target={() => {
              navigation.navigate("Forest_Content");
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
  tempImage: {
    width: wp("15%"),
    height: hp("30%"),
  },
  nestedContainer: {
    width: wp("80%"),
    height: hp("50%"),
    marginTop: hp("25%"),
    alignItems: "center",
    justifyContent: "center",
  },
  nestedImage: {
    width: wp("72%"),
    height: hp("36%"),
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
  buttonContainer: {
    width: wp("80%"),
    height: hp("10%"),
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: hp("3%"),
  },
  iconButtonContainer: {
    width: wp("40%"),
    height: hp("10%"),
    flexDirection: "row",
  },
  nextButtonContainer: {
    width: wp("30%"),
    height: hp("10%"),
  },
});

export default Forest_Intro;
