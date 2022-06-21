import { Dimensions, PixelRatio, Text, StyleSheet, View } from "react-native";
import ButtonContainer from "../Components/ButtonContainer";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

let { width, height } = Dimensions.get("window");

const widthToDp = (number) => {
  let givenWidth = typeof number === "number" ? number : parseFloat(number);

  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const heightToDp = (number) => {
  let givenHeight = typeof number === "number" ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

const Responsive = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.bg}>
      <Text style={styles.text}>Responive</Text>
      <ButtonContainer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: wp("10"),
  },
});

export default Responsive;
