import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import ButtonContainer from "../Components/ButtonContainer";
let { width, height } = Dimensions.get("window");

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import LinearGradient from "react-native-linear-gradient";

const ScreenThirteen = (props) => {
  const { navigation } = props;
  return (
    <ScrollView style={styles.mainBgContainer}>
      <View style={styles.topContainer}>
        <Image
          style={styles.vectorTop}
          source={require("../../assets/screenThirteenPic/Vector.png")}
        />
        <View style={styles.topMiddleContainer}>
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
        <View style={styles.topNotificationContainer}>
          <View style={styles.notificationCountContainer}>
            <Text style={styles.notificationCount}>10</Text>
          </View>
          <Image
            style={styles.notificationIcon}
            source={require("../../assets/screenThirteenPic/notifications_none.png")}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.Topheading}>कालचा अभ्यास</Text>
        <View style={styles.headingContainer}>
          <View style={styles.purpleContainer}>
            <Text style={styles.purpleContainerHeading}>मराठी </Text>
          </View>
          <View style={styles.borderBlackContainer}>
            <Text style={styles.borderBlackContainerHeading}>
              आजी - कुटुंबाचं आगळ{" "}
            </Text>
            <View style={styles.watchLaterContainer}>
              <Image
                style={styles.timePic}
                source={require("../../assets/screenThirteenPic/watch_later.png")}
              />
              <Text style={styles.watchLaterContainerTime}>
                १२ मिनटे १० सेकंद{" "}
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.bottomHeading}>आपला विषय निवडा</Text>
        <View style={styles.bottomContainerMain}>
          <View style={styles.languageParentContainer}>
            <View style={styles.languageContainer}>
              <View
                style={[
                  styles.languageWordContainer,
                  styles.languageWordContainerColorFirst,
                ]}
              >
                <Text style={styles.languageWordContainerWord} l>
                  म
                </Text>
              </View>
              <View style={styles.languageContainerShadow}></View>
              <Text style={styles.languageWordContainerFulWord}>मराठी </Text>
            </View>
            <View style={styles.languageContainerSecond}>
              <View
                style={[
                  styles.languageWordContainer,
                  styles.languageWordContainerColorSecond,
                ]}
              >
                <Text style={styles.languageWordContainerWord} l>
                  इं
                </Text>
              </View>
              <View style={styles.languageContainerShadow}></View>
              <Text style={styles.languageWordContainerFulWord}>इंग्रजी </Text>
            </View>
          </View>
          <View style={styles.languageParentContainer}>
            <View style={styles.languageContainer}>
              <View
                style={[
                  styles.languageWordContainer,
                  styles.languageWordContainerColorThird,
                ]}
              >
                <Text style={styles.languageWordContainerWord} l>
                  हिं
                </Text>
              </View>
              <View style={styles.languageContainerShadow}></View>
              <Text style={styles.languageWordContainerFulWord}>हिंदी</Text>
            </View>
            <View style={styles.languageContainerSecond}>
              <View
                style={[
                  styles.languageWordContainer,
                  styles.languageWordContainerColorFourth,
                ]}
              >
                <Text style={styles.languageWordContainerWord} l>
                  बी
                </Text>
              </View>
              <View style={styles.languageContainerShadow}></View>
              <Text style={styles.languageWordContainerFulWord}>बीजगणित </Text>
            </View>
          </View>
          <View style={styles.languageParentContainer}>
            <View style={styles.languageContainer}>
              <View
                style={[
                  styles.languageWordContainer,
                  styles.languageWordContainerColorFifth,
                ]}
              >
                <Text style={styles.languageWordContainerWord} l>
                  वि
                </Text>
              </View>
              <View style={styles.languageContainerShadow}></View>
              <Text style={styles.languageWordContainerFulWord}>
                विज्ञान भाग - १
              </Text>
            </View>
            <View style={styles.languageContainerSecond}>
              <View
                style={[
                  styles.languageWordContainer,
                  styles.languageWordContainerColorSixth,
                ]}
              >
                <Text style={styles.languageWordContainerWord} l>
                  वि
                </Text>
              </View>
              <View style={styles.languageContainerShadow}></View>
              <Text style={styles.languageWordContainerFulWord}>
                विज्ञान भाग - २{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ButtonContainer navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainBgContainer: {
    flex: 1,
    marginTop: 32,
  },
  topContainer: {
    backgroundColor: "#9910C9E8",
    height: 120,
    flexDirection: "row",
    alignItems: "center",
  },
  topMiddleContainer: {
    flexDirection: "row",
    marginLeft: 18,
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
    color: "white",
  },
  middleContainerGirlHeading: {
    fontSize: 18,
    color: "white",
  },
  middleContainerGirlContentContainer: { alignSelf: "center", marginLeft: 5 },
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
  bottomContainer: {
    marginLeft: 16,
    flexDirection: "column",
    flex: 1,
  },
  headingContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  purpleContainer: {
    backgroundColor: "#7E66AD",
    height: 67,
    width: 72,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  purpleContainerHeading: {
    fontSize: 16,
    color: "white",
  },
  borderBlackContainer: {
    border: "solid",
    borderColor: "#BDBDBD",
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    marginLeft: 3,
    marginRight: 16,
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 25,
  },
  watchLaterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  watchLaterContainerTime: {
    fontSize: 12,
  },
  timePic: {
    width: 15,
    height: 15,
    marginRight: 8,
  },
  bottomHeading: {
    color: "#686868",
    fontSize: 20,
    marginTop: 21,
  },
  languageContainer: {
    width: wp(40),
    height: wp(40),

    // elevation: 2,
    // shadowColor: "#52006A",

    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // backgroundColor: "white",
    // borderRadius: 8,
    // paddingVertical: 45,
    // paddingHorizontal: 25,
    // width: "100%",

    marginVertical: 10,
    borderRadius: 16,
    border: "solid",
    borderColor: "grey",
    borderWidth: 1,

    marginTop: 24,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  languageContainerSecond: {
    width: wp(40),
    height: wp(40),

    // elevation: 2,
    // shadowColor: "#52006A",

    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // backgroundColor: "white",
    // borderRadius: 8,
    // paddingVertical: 45,
    // paddingHorizontal: 25,
    // width: "100%",
    // marginVertical: 10,

    borderRadius: 16,
    border: "solid",
    borderColor: "grey",
    borderWidth: 1,

    marginTop: 24,
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 18,
    marginRight: 30,
  },

  languageWordContainer: {
    width: 59,
    height: 59,
    marginLeft: 20,
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  languageWordContainerColorFirst: {
    backgroundColor: "#FF5D5D",
  },
  languageWordContainerColorSecond: {
    backgroundColor: "#EB4174",
  },
  languageWordContainerColorThird: {
    backgroundColor: "#64FBD7",
  },
  languageWordContainerColorFourth: {
    backgroundColor: "#FFDE67",
  },
  languageWordContainerColorFifth: {
    backgroundColor: "#7D2DFF",
  },
  languageWordContainerColorSixth: {
    backgroundColor: "#FF5454",
  },
  languageWordContainerWord: {
    color: "white",
    fontSize: 40,
  },
  languageWordContainerFulWord: {
    fontSize: 17,
    alignSelf: "flex-end",
    marginBottom: 25,
    marginRight: 13,
  },
  languageParentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomContainerMain: {},
  languageContainerShadow: {
    width: 58,
    height: 7,
    elevation: 20,
    shadowColor: "#52006A",
    marginLeft: 22,
    borderRadius: 200,
    marginBottom: 20,
  },
  buttonStyle: {
    marginLeft: 20,
    height: 30,
    width: 100,
    backgroundColor: "#faf087",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
});

export default ScreenThirteen;
