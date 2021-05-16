import { useNavigation } from "@react-navigation/core";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import WaterContentBackground from "../components/WaterContentBackground";
import IconButton from "../components/IconButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../components/Responsive";

const Water_Content = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <WaterContentBackground />
      </View>
      <View style={styles.buttonContainer}>
        {/* <View style={styles.iconButtonContainer}>
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
        </View> */}
        <View style={styles.nextButtonContainer}>
          <CustomButton
            src={require("../assets/buttons/good_button.png")}
            target={() => {
              navigation.navigate("Water_Quiz1");
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
  buttonContainer: {
    width: wp("78%"),
    height: hp("10%"),
    marginTop: hp("79%"),
    flexDirection: "row",
    justifyContent: "space-between",
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

export default Water_Content;
