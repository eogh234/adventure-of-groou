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
import IconButton from "../components/IconButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../components/Responsive";
import WaterResult1Background from "../components/WaterResult1Background";
import LottieView from "lottie-react-native";
import ExitButton from "../components/ExitButton";
import ModalButton from "../components/ModalButton";

const Water_Result1 = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/correct_sound.wav")
    );
    await sound.setIsLoopingAsync(false);
    await sound.playAsync();
  }
  playSound();

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
        <WaterResult1Background />
      </View>
      <View style={styles.nestedContainer}>
        <LottieView
          style={styles.nestedImage}
          source={require("../assets/json/water_result1_nested_background.json")}
          autoPlay={true}
          loop={true}
        />
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
            src={require("../assets/buttons/good_button.png")}
            target={() => {
              navigation.navigate("Water_Quiz2");
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
  nestedContainer: {
    width: wp("80%"),
    height: hp("50%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("22%"),
  },
  nestedImage: {
    width: wp("75%"),
    height: hp("85"),
  },
  buttonContainer: {
    width: wp("77%"),
    height: hp("10%"),
    marginTop: hp("7%"),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: wp("10%"),
  },
  iconButtonContainer: {
    width: wp("40%"),
    height: hp("10%"),
    flexDirection: "row",
  },
  nextButtonContainer: {
    width: wp("10%"),
    height: hp("10%"),
  },
});

export default Water_Result1;
