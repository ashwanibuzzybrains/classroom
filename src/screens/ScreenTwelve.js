import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SvgUri } from "react-native-svg";
import GirlPic from "../../assets/screenTwelvePic/Frame.svg";

const ScreenTwelve = (props) => {
  const { navigation } = props;
  return (
    <ImageBackground
      source={require("../../assets/screenTwelvePic/orangekj.png")}
      style={styles.bgColor}
    >
      <View>
        <View>
          {/* <Image
            style={styles.topPic}
            source={require("../../assets/screenTwelvePic/Frame.png")}
          /> */}
          <SvgUri
            style={styles.topPic}
            uri="https://res.cloudinary.com/darfyr0di/image/upload/v1655377110/new%20app/screentwelve/Frame_ezfvet.svg"
          />
          {/* <Svg width={100} height={100}>
            <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} fill="red" />
          </Svg> */}
        </View>
        <View style={styles.topTextContainer}>
          <Text style={styles.topText}>आपले प्रोफाइल निवडा</Text>
        </View>
        <View style={styles.personContainerMainBg}>
          <View style={styles.personContainerSubContainer}>
            <View style={styles.personContainer}>
              <View
                style={[
                  styles.personContainerBgColorFirst,
                  styles.personContainerBg,
                ]}
              >
                <Image
                  style={styles.personContainerPic}
                  source={require("../../assets/screenTwelvePic/clipartblackhair.png")}
                />
              </View>
              <View style={styles.personContainerTextContainer}>
                <Text style={styles.personContainerText}>अभिजीत</Text>
              </View>
            </View>
            <View style={styles.personContainerLeft}>
              <View
                style={[
                  styles.personContainerBgColorSecond,
                  styles.personContainerBg,
                ]}
              >
                <Image
                  style={styles.personContainerPic}
                  source={require("../../assets/screenTwelvePic/clipartblackblue.png")}
                />
              </View>
              <View style={styles.personContainerTextContainer}>
                <Text style={styles.personContainerText}>विजय</Text>
              </View>
            </View>
          </View>
          <View style={styles.personContainerSubContainerBottom}>
            <View style={styles.personContainer}>
              <View
                style={[
                  styles.personContainerBgColorThird,
                  styles.personContainerBg,
                ]}
              >
                <Image
                  style={styles.personContainerPic}
                  source={require("../../assets/screenTwelvePic/clip.png")}
                />
              </View>
              <View style={styles.personContainerTextContainer}>
                <Text style={styles.personContainerText}>सोनल</Text>
              </View>
            </View>
            <View style={styles.personContainerLeft}>
              <View
                style={[
                  styles.personContainerBgColorFourth,
                  styles.personContainerBg,
                ]}
              >
                <Text style={styles.personContainerCrossPic}>+</Text>
              </View>
              <View style={styles.personContainerTextContainer}>
                <Text style={styles.personContainerText}>ADD</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Image
          source={require("../../assets/screenTwelvePic/Ellipsesun.png")}
          style={styles.sun}
        />
        <Image
          source={require("../../assets/screenTwelvePic/Framebush.png")}
          style={styles.framePic}
        />

        <Image
          source={require("../../assets/screenTwelvePic/OBJECTSbottom.png")}
          style={styles.bottomPic}
        />
        <Image
          source={require("../../assets/screenTwelvePic/Frametree.png")}
          style={styles.frameTree}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgColor: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topPic: {
    height: 65.78641510009766,
    width: 66,
    marginTop: 85,
    alignSelf: "center",
  },
  topTextContainer: {
    marginTop: 26,
  },
  topText: {
    // fontFamily: "Mukta",
    fontSize: 16,
    lineHeight: 27,
    textAlign: "center",
  },
  personContainerBg: {
    height: 75,
    width: 75,
    border: "solid",
    borderWidth: 5,
    borderColor: "#ffffff",
    elevation: 3,
    borderRadius: 50,
  },
  personContainerBgColorFirst: {
    backgroundColor: "#DC8327",
  },
  personContainerBgColorSecond: {
    backgroundColor: "#8165C1",
  },
  personContainerBgColorThird: {
    backgroundColor: "#D71623",
  },
  personContainerBgColorFourth: {
    backgroundColor: "skyblue",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  personContainerPic: {
    height: 58,
    width: 36,
    position: "absolute",
    left: "23.89%",
    right: "66.11%",
    top: "23%",
  },
  personContainerPicCross: {
    width: 27,
    height: 17,
  },
  personContainerSubContainer: {
    flexDirection: "row",
  },
  personContainerMainBg: {
    marginTop: 45,
  },
  personContainer: {
    alignItems: "center",
  },
  personContainerLeft: {
    marginLeft: 52,
    alignItems: "center",
  },
  personContainerTextContainer: {
    backgroundColor: "#ffffff",
    elevation: 5,
    borderRadius: 6,
    width: 91,
    height: 25,
    position: "absolute",
    top: 71,
  },
  personContainerText: {
    fontSize: 16,
    textAlign: "center",
  },
  personContainerSubContainerBottom: {
    flexDirection: "row",
    marginTop: 35,
  },
  personContainerCrossPic: {
    fontSize: 40,
    color: "white",
  },
  bottomContainer: {},
  bottomPic: {
    minWidth: "100%",
  },
  sun: {
    position: "absolute",
    left: "43%",
    top: "35%",
  },
  framePic: {
    minWidth: "100%",
    position: "relative",
    top: "15%",
  },
  frameTree: {
    position: "absolute",
    left: "57%",
    bottom: "40%",
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

export default ScreenTwelve;
