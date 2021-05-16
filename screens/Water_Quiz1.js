import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "../components/CustomButton";
import ExitButton from "../components/ExitButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../components/Responsive";
import WaterQuiz1Background from "../components/WaterQuiz1Background";
import LottieView from "lottie-react-native";
import IconButton from "../components/IconButton";
import ModalButton from "../components/ModalButton";

const Water_Quiz1 = () => {
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState("");
  const [isPositivePress, setIsPositivePress] = useState(false);
  const [isNegativePress, setIsNegativePress] = useState(false);
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
        <WaterQuiz1Background />
      </View>
      <View style={styles.nestedContainer}>
        <TouchableOpacity
          onPress={() => {
            setIsSelected("positive");
            setIsNegativePress(false);
          }}
          onPressIn={() => {
            setIsPositivePress(true);
          }}
          onPressOut={() => {
            setIsPositivePress(false);
          }}
        >
          <ImageBackground
            style={isPositivePress ? styles.buttonPressed : styles.button}
            source={
              isSelected == "positive"
                ? require("../assets/buttons/positive_button_selected.png")
                : require("../assets/buttons/positive_button.png")
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsSelected("negative");
            setIsPositivePress(false);
          }}
          onPressIn={() => {
            setIsNegativePress(true);
            setIsPositivePress(false);
          }}
          onPressOut={() => {
            setIsNegativePress(false);
          }}
        >
          <ImageBackground
            style={isNegativePress ? styles.buttonPressed : styles.button}
            source={
              isSelected == "negative"
                ? require("../assets/buttons/negative_button_selected.png")
                : require("../assets/buttons/negative_button.png")
            }
          />
        </TouchableOpacity>
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
        <CustomButton
          src={
            isSelected
              ? require("../assets/buttons/next_button_enabled.png")
              : require("../assets/buttons/next_button_disabled.png")
          }
          target={() => {
            isSelected == "negative"
              ? navigation.navigate("Water_Result1")
              : setModalVisible(true);
          }}
        />
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
  modalHeaderContainer: {
    width: wp("45%"),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  modalBackgroundContainer: {
    width: wp("55%"),
    height: hp("60%"),
    backgroundColor: "white",
    marginLeft: wp("25%"),
    marginTop: hp("15%"),
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginTop: hp("3%"),
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    width: wp("46%"),
    height: hp("85%"),
    marginTop: hp("-13%"),
    marginLeft: wp("0.4%"),
  },
  modalText: {
    width: wp("40%"),
    resizeMode: "contain",
    // marginTop: hp("-10%"),
  },
  modalButtonContainer: {
    width: wp("30%"),
    height: hp("20%"),
    marginTop: hp("-48%"),
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
    height: hp("70%"),
    backgroundColor: "white",
    marginLeft: wp("25%"),
    marginTop: hp("10%"),
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  exitTextContainer: {
    width: wp("55%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("-10%"),
  },
  exitModalImage: {
    width: wp("46%"),
    height: hp("28%"),
    marginTop: hp("-10%"),
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
    width: wp("60%"),
    height: hp("35%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("23%"),
  },
  nestedImage: {
    width: wp("54.8%"),
    height: hp("33%"),
    resizeMode: "cover",
  },
  button: {
    width: wp("34%"),
    height: hp("19%"),
  },
  buttonPressed: {
    width: wp("28%"),
    height: hp("15%"),
    resizeMode: "cover",
  },
  buttonContainer: {
    width: wp("80%"),
    height: hp("10%"),
    marginTop: hp("11%"),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  iconButtonContainer: {
    width: wp("40%"),
    height: hp("8%"),
    flexDirection: "row",
  },
  nextButtonContainer: {
    width: wp("30%"),
    height: hp("10%"),
  },
});

export default Water_Quiz1;
