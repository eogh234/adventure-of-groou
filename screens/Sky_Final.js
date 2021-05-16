import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
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
import ModalButton from "../components/ModalButton";
import IconButton from "../components/IconButton";
import NextButton from "../components/NextButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../components/Responsive";
import SkyFinalBackground from "../components/SkyFinalBackground";
import LottieView from "lottie-react-native";

const Sky_Final = () => {
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
          <View style={styles.modalHeaderContainer}>
            {/* <ExitButton
              src={require("../assets/icons/modal_exit.png")}
              target={() => {
                setModalVisible(false);
              }}
            /> */}
          </View>
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
        <SkyFinalBackground />
      </View>
      <View style={styles.nestedContainer}>
        <ImageBackground
          style={styles.nestedImage}
          source={require("../assets/backgrounds/sky_final_nested_background.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.nextButtonContainer}>
          <NextButton
            src={require("../assets/buttons/next_area_button_enabled.png")}
            target={() => {
              navigation.navigate("Forest_Map");
            }}
          />
        </View>
        <CustomButton
          src={require("../assets/buttons/next_area_button_disabled.png")}
          target={() => {
            navigation.navigate("Final");
          }}
        />
        <View style={styles.headerContainer}>
          <View style={styles.homeButton}>
            <IconButton
              src={require("../assets/buttons/home_button.png")}
              target={() => {
                setModalVisible(true);
              }}
            />
          </View>
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
    justifyContent: "center",
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
    marginLeft: wp("22.5%"),
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
  headerContainer: {
    width: wp("80%"),
    height: hp("10%"),
    alignItems: "flex-end",
    marginBottom: hp("5%"),
  },
  homeButton: {
    marginTop: hp("-2%"),
    width: wp("13%"),
    height: hp("10%"),
  },
  nestedContainer: {
    width: wp("52%"),
    height: hp("34%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("20%"),
  },
  nestedImage: {
    width: wp("56.2%"),
    height: hp("31.7%"),
    resizeMode: "contain",
  },
  buttonContainer: {
    width: wp("80%"),
    height: hp("20%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("9%"),
    paddingVertical: hp("8%"),
  },
  nextButtonContainer: {
    paddingLeft: wp("2%"),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Sky_Final;
