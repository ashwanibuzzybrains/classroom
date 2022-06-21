import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import { SvgUri } from "react-native-svg";
let { width, height } = Dimensions.get("window");

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ScreenLogin = () => {
  return (
    <ScrollView style={styles.mainBg}>
      <ImageBackground
        style={styles.bg}
        source={require("../../assets/screenLoginPic/kidsBg.png")}
      >
        <View style={styles.mainContainer}>
          <Text style={styles.otpHeading}> OTP</Text>
          <Text style={styles.otpContent}>आपला OTP नंबर अंकित करा </Text>
          <View style={styles.inputContainer}>
            <TextInput secureTextEntry={true} style={styles.inputElement} />
            <TextInput secureTextEntry={true} style={styles.inputElement} />
            <TextInput secureTextEntry={true} style={styles.inputElement} />
            <TextInput secureTextEntry={true} style={styles.inputElement} />
            <TextInput secureTextEntry={true} style={styles.inputElement} />
          </View>
          <Text style={styles.timeContent}>Code expires in : 09 : 56 </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonHeading}>सबमिट</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  mainBg: {
    flex: 1,
    marginTop: hp(4.0),
    backgroundColor: "#ffffff",
  },
  bg: {
    flex: 1,
  },
  mainContainer: {
    marginTop: hp(50),
    flex: 1,
  },
  otpHeading: {
    textAlign: "right",
    fontSize: wp(5.5),
    marginRight: wp(7.5),
  },
  otpContent: {
    fontSize: 14,
    marginTop: wp(14),
    marginLeft: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  inputElement: {
    borderColor: "#B8B8D2",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 20,
    height: wp(14),
    width: wp(14),
    paddingLeft: wp(7),
  },
  button: {
    backgroundColor: "#67CD5D",
    height: 40,
    width: width - 32,
    marginLeft: 16,
    justifyContent: "center",
    marginTop: 35,
    borderRadius: 10,
    alignItems: "center",
  },
  timeContent: {
    textAlign: "center",
    marginTop: 33,
  },
  buttonHeading: {
    fontSize: 20,
    color: "#16460C",
  },
});
export default ScreenLogin;
