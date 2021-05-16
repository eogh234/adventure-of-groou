import { useNavigation } from "@react-navigation/core";
import LottieView from "lottie-react-native";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../components/CustomButton";
import IconButton from "../components/IconButton";
import ExitButton from "../components/ExitButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../components/Responsive";
import SkyQuiz2Background from "../components/SkyQuiz2Background";
import ModalButton from "../components/ModalButton";

const Sky_Quiz2 = () => {
  const navigation = useNavigation();

  const [select, setSelect] = useState("");
  const [isBlack, setIsBlack] = useState(false);
  const [isBlue, setIsBlue] = useState(false);
  const [isGray, setIsGray] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [exitModalVisible, setExitModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.modalBackgroundContainer}>
          <View style={styles.textContainer}>
            <Image
              style={styles.modalText}
              source={require("../assets/texts/retry_text.png")}
            />
          </View>
          <View style={styles.modalContent}>
            <LottieView
              style={styles.modalImage}
              source={require("../assets/json/popup.json")}
              autoPlay={true}
              loop={false}
            />
          </View>
          <View style={styles.modalButtonContainer}>
            <CustomButton
              src={require("../assets/buttons/retry_button.png")}
              target={() => {
                setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <Modal
        style={styles.modal}
        animationType="fade"
        transparent={true}
        visible={exitModalVisible}
      >
        <View style={styles.exitModalBackgroundContainer}>
          <View style={styles.exitTextContainer}>
            <Image
              style={styles.modalText}
              source={require("../assets/texts/exit_text.png")}
            />
          </View>
          <View style={styles.exitModalContent}>
            <Image
              style={styles.exitModalImage}
              source={require("../assets/backgrounds/modal_nested_background.png")}
            />
          </View>
          <View style={styles.exitModalButtonContainer}>
            <ModalButton
              style={styles.exitButton}
              src={require("../assets/buttons/exit_button.png")}
              target={() => {
                setExitModalVisible(false);
                navigation.navigate("OnBoarding");
              }}
            />
            <ModalButton
              style={styles.continueButton}
              src={require("../assets/buttons/continue_button.png")}
              target={() => {
                setExitModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.backgroundContainer}>
        <SkyQuiz2Background />
      </View>
      <View style={styles.nestedContainer}>
        <ImageBackground
          style={styles.nestedImage}
          source={require("../assets/backgrounds/sky_quiz2_nested_background.png")}
        >
          <View style={styles.blueGrayContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => {
                setSelect("blue");
              }}
              onPressIn={() => {
                setIsBlue(true);
              }}
              onPressOut={() => {
                setIsBlue(false);
              }}
            >
              <ImageBackground
                style={isBlue ? styles.colorBlue_pressed : styles.colorBlue}
                source={
                  select == "blue"
                    ? require("../assets/icons/color_blue_selected.png")
                    : require("../assets/icons/color_blue.png")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => {
                setSelect("gray");
              }}
              onPressIn={() => {
                setIsGray(true);
              }}
              onPressOut={() => {
                setIsGray(false);
              }}
            >
              <ImageBackground
                style={isGray ? styles.colorGray_pressed : styles.colorGray}
                source={
                  select == "gray"
                    ? require("../assets/icons/color_gray_selected.png")
                    : require("../assets/icons/color_gray.png")
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.blackContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => {
                setSelect("black");
              }}
              onPressIn={() => {
                setIsBlack(true);
              }}
              onPressOut={() => {
                setIsBlack(false);
              }}
            >
              <ImageBackground
                style={isBlack ? styles.colorBlack_pressed : styles.colorBlack}
                source={
                  select == "black"
                    ? require("../assets/icons/color_black_selected.png")
                    : require("../assets/icons/color_black.png")
                }
              />
            </TouchableOpacity>
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
              setExitModalVisible(true);
            }}
          />
        </View>
        <View style={styles.nextButtonContainer}>
          <CustomButton
            src={
              select
                ? require("../assets/buttons/next_button_enabled.png")
                : require("../assets/buttons/next_button_disabled.png")
            }
            target={() => {
              if (!select) {
                ToastAndroid.show("색을 선택해주세요!", ToastAndroid.SHORT);
              } else if (select != "blue") {
                setModalVisible(true);
              } else {
                navigation.navigate("Sky_Result2");
              }
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
    marginTop: hp("7%"),
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    width: wp("46%"),
    height: hp("85%"),
    marginTop: hp("-13%"),
  },
  modalText: {
    width: wp("40%"),
    resizeMode: "contain",
    // marginTop: hp("-10%"),
  },
  modalButtonContainer: {
    width: wp("30%"),
    height: hp("20%"),
    marginTop: hp("-47%"),
    alignItems: "center",
    justifyContent: "center",
  },
  exitModalHeaderContainer: {
    width: wp("45%"),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  exitModalBackgroundContainer: {
    width: wp("55%"),
    height: hp("65%"),
    backgroundColor: "white",
    marginLeft: wp("25%"),
    marginTop: hp("12%"),
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  exitTextContainer: {
    width: wp("55%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("-3%"),
  },
  exitModalImage: {
    width: wp("46%"),
    height: hp("28%"),
    marginTop: hp("-1%"),
    resizeMode: "contain",
  },
  exitModalText: {
    width: wp("40%"),
    resizeMode: "contain",
  },
  exitModalButtonContainer: {
    width: wp("30%"),
    height: hp("15%"),
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
  nestedContainer: {
    width: wp("80%"),
    height: hp("50%"),
    marginTop: hp("25%"),
    alignItems: "center",
    justifyContent: "center",
  },
  nestedImage: {
    width: wp("74.5%"),
    height: hp("37.25%"),
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
  blueGrayContainer: {
    flexDirection: "row",
    marginTop: hp("8%"),
  },
  blackContainer: {},
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  colorBlack: {
    width: wp("23.5%"),
    height: hp("9.8%"),
    resizeMode: "contain",
    marginTop: hp("3%"),
  },
  colorBlue: {
    width: wp("23.5%"),
    height: hp("9.8%"),
    resizeMode: "contain",
    marginRight: wp("8%"),
  },
  colorGray: {
    width: wp("23.5%"),
    height: hp("9.8%"),
    resizeMode: "contain",
  },
  colorBlack_pressed: {
    width: wp("21.6%"),
    height: hp("9%"),
    marginTop: hp("3%"),
    resizeMode: "contain",
  },
  colorBlue_pressed: {
    width: wp("21.6%"),
    height: hp("9%"),
    marginRight: wp("8%"),
    resizeMode: "contain",
  },
  colorGray_pressed: {
    width: wp("21.6%"),
    height: hp("9%"),
    resizeMode: "contain",
  },
  buttonContainer: {
    width: wp("90%"),
    height: hp("10%"),
    marginTop: hp("2%"),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButtonContainer: {
    width: wp("40%"),
    height: hp("10%"),
    flexDirection: "row",
  },
  nextButtonContainer: {
    width: wp("35%"),
    height: hp("10%"),
  },
});

export default Sky_Quiz2;
