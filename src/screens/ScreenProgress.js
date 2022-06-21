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
  StatusBar,
} from "react-native";

import { SvgUri } from "react-native-svg";
let { width, height } = Dimensions.get("window");

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ScreenProgress = () => {
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ["#F44336", "#2196F3", "#FFEB3B", "#4CAF50", "#FF9800"];

  return (
    <View style={styles.mainBgContainer}>
      <View style={styles.topContainer}>
        <View>
          <View style={styles.topContainerArrow}>
            <Image
              style={styles.vectorTop}
              source={require("../../assets/screenThirteenPic/Vector.png")}
            />
            <Text style={styles.topContainerArrowText}>माझी प्रगती</Text>
          </View>
          <View style={styles.topNameContainer}>
            <View style={styles.topMiddleContainerCircle}>
              <Image
                style={styles.middleContainerGirl}
                source={require("../../assets/screenThirteenPic/Group.png")}
              />
            </View>
            <View style={styles.middleContainerGirlContentContainer}>
              <Text style={styles.middleContainerGirlHeading}>
                सोनल देशमुख, 10th
              </Text>
              <Text style={styles.middleContainerGirlContent}>
                बालशिक्षण मंदिर, कोथरूड
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.topBottomContainer}>
          <Text style={styles.topBottomContainerLeft}>एकूण वेळ: ५०तास</Text>
          <Text style={styles.line}>|</Text>
          <Text style={styles.topBottomContainerRight}>माझे कॉईन्स: 1025</Text>
        </View>
      </View>
      <View style={styles.pieChartContainer}>
        <Text>pieChart</Text>
        {/* <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainBgContainer: {
    flex: 1,
    marginTop: 32,
  },
  topContainer: {
    backgroundColor: "#f2ce6b",
    height: 220,
    justifyContent: "space-between",
  },
  topContainerArrow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 14,
    marginLeft: 16,
  },
  topNameContainer: {
    flexDirection: "row",
    marginLeft: 48,
    marginTop: 28,
  },

  topContainerArrowText: {
    fontSize: 20,
    marginLeft: 24,
  },

  vectorTop: {
    width: 12,
    height: 20,
    marginLeft: 11,
  },
  middleContainerGirl: {
    height: 50,
    width: 42,
    position: "absolute",
    left: "11%",
    top: "9%",
  },
  topMiddleContainerCircle: {
    backgroundColor: "#F7D8BA",
    height: 52,
    width: 52,
    borderRadius: 50,
  },
  middleContainerGirlContent: {
    fontSize: 14,
    marginTop: 7,
    color: "#302828",
    fontWeight: "200",
  },
  middleContainerGirlHeading: {
    fontSize: 18,
    color: "#302828",
    fontWeight: "800",
  },
  middleContainerGirlContentContainer: { alignSelf: "center", marginLeft: 9 },
  topNotificationContainer: {
    marginLeft: "auto",
    marginRight: 7,
    marginBottom: 50,
  },
  notificationCountContainer: {
    backgroundColor: "#FF3347",
    height: 17,
    width: 17,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  notificationCount: {
    fontSize: 10,
    color: "white",
  },
  notificationIcon: {
    marginRight: 5,
  },
  Topheading: {
    fontSize: 14,
    marginTop: 10,
  },
  topBottomContainer: {
    backgroundColor: "#7F411F",
    height: 53,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  topBottomContainerLeft: { color: "white", fontSize: 16, fontWeight: "500" },
  line: { color: "white", fontSize: 50, position: "relative", bottom: "1%" },
  topBottomContainerRight: { color: "white", fontSize: 16, fontWeight: "500" },
  pieChartContainer: {
    flexDirection: "column",
  },
});
export default ScreenProgress;
