import { useNavigation } from "@react-navigation/core";
import LottieView from "lottie-react-native";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import IconButton from "../components/IconButton";
import SkyMapBackground from "../components/SkyMapBackground";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../components/Responsive";
import CustomButton from "../components/CustomButton";
import ExitButton from "../components/ExitButton";
import ModalButton from "../components/ModalButton";

const Sky_Map = () => {
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
        <SkyMapBackground />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("Sky_Intro");
          }}
        >
          <LottieView
            style={styles.touchpoint}
            source={require("../assets/json/touchpoint.json")}
            autoPlay={true}
            loop={true}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
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
  touchpoint: {
    width: wp("30.9%"),
    height: hp("20%"),
    opacity: 0.8,
  },
  headerContainer: {
    width: wp("100%"),
    height: hp("10%"),
    marginTop: hp("35%"),
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconButtonContainer: {
    width: wp("40%"),
    height: hp("10%"),
    flexDirection: "row",
    marginTop: hp("-2%"),
    marginRight: wp("-5%"),
  },
});

export default Sky_Map;
