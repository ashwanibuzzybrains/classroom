import {
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
const ScreenEleven = (props) => {
  const { navigation } = props;
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.iconContainer}>
          <Image source={require("../../assets/screenElevenPic/Icon.png")} />
          <Image
            source={require("../../assets/screenElevenPic/notifications_none.png")}
          />
        </View>
        <View style={styles.peopleContainerMain}>
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
            <Text style={styles.personContainerText}>सोनल देशमुख</Text>
            <Text style={styles.personContainerText}>
              बालशिक्षण मंदिर, कोथरूड
            </Text>
          </View>
          <View style={styles.personContainerMiddle}>
            <View
              style={[
                styles.personContainerBgColorSecond,
                styles.personContainerBgMiddle,
              ]}
            >
              <Image
                style={styles.personContainerPicMiddle}
                source={require("../../assets/screenTwelvePic/clipartblackhair.png")}
              />
            </View>
            <Text style={styles.personContainerTextMiddleHeading}>
              सोनल देशमुख
            </Text>
            <Text style={styles.personContainerTextMiddle}>
              बालशिक्षण मंदिर, कोथरूड
            </Text>
            <Text style={styles.personContainerTextMiddle}>
              District rank 8091
            </Text>
          </View>
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
            <Text style={styles.personContainerText}>सोनल देशमुख</Text>
            <Text style={styles.personContainerText}>
              बालशिक्षण मंदिर, कोथरूड
            </Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View style={styles.firstTimeContainer}>
            <Text>0%</Text>
          </View>
          <View style={styles.secondTimeContainer}>
            <Image
              style={styles.timePic}
              source={require("../../assets/screenElevenPic/Vector.png")}
            />
            <Text style={styles.time}>५ मिनिटे ४४ सेकंद</Text>
            <Image
              style={styles.backPic}
              source={require("../../assets/screenElevenPic/Vectorse.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.parentClassContainer}>
          <View
            style={[styles.classContainer, styles.classContainerColorFirst]}
          >
            <Image
              source={require("../../assets/screenElevenPic/business.png")}
              style={styles.classContainerPic}
            />
            <Text
              style={[
                styles.classContainerHeading,
                styles.classContainerHeadingColorOne,
              ]}
            >
              माझी शाळा
            </Text>
          </View>
          <View
            style={[
              styles.classContainerSecond,
              styles.classContainerColorSecond,
            ]}
          >
            <Image
              source={require("../../assets/screenElevenPic/Group.png")}
              style={styles.classContainerPic}
            />
            <Text
              style={[
                styles.classContainerHeading,
                styles.classContainerHeadingColorTwo,
              ]}
            >
              शालेय अभ्यासक्रम{" "}
            </Text>
          </View>
        </View>
        <View style={styles.parentClassContainer}>
          <View
            style={[styles.classContainer, styles.classContainerColorThird]}
          >
            <Image
              source={require("../../assets/screenElevenPic/trophy.png")}
              style={styles.classContainerPic}
            />
            <Text
              style={[
                styles.classContainerHeading,
                styles.classContainerHeadingColorThree,
              ]}
            >
              गुणवत्ता यादी
            </Text>
          </View>
          <View
            style={[
              styles.classContainerSecond,
              styles.classContainerColorFourth,
            ]}
          >
            <Image
              source={require("../../assets/screenElevenPic/users.png")}
              style={styles.classContainerPic}
            />
            <Text
              style={[
                styles.classContainerHeading,
                styles.classContainerHeadingColorFour,
              ]}
            >
              स्पेशल कोर्सेस
            </Text>
          </View>
        </View>
        <View style={styles.parentClassContainer}>
          <View
            style={[styles.classContainer, styles.classContainerColorFifth]}
          >
            <Image
              source={require("../../assets/screenElevenPic/Groupcap.png")}
              style={styles.classContainerPic}
            />
            <Text
              style={[
                styles.classContainerHeading,
                styles.classContainerHeadingColorFive,
              ]}
            >
              माझी प्रगती
            </Text>
          </View>
          <View
            style={[
              styles.classContainerSecond,
              styles.classContainerColorSixth,
            ]}
          >
            <Image
              source={require("../../assets/screenElevenPic/Groupmike.png")}
              style={styles.classContainerPic}
            />
            <Text
              style={[
                styles.classContainerHeading,
                styles.classContainerHeadingColorSix,
              ]}
            >
              आजचा उपक्रम!
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Image source={require("../../assets/screenElevenPic/trophy.png")} />
        <Text style={styles.bottomText}>348</Text>
        <Image
          source={require("../../assets/screenElevenPic/chevron_right.png")}
        />
        <Image source={require("../../assets/screenElevenPic/coin.png")} />
        <Text style={styles.bottomText}>1209</Text>
        <Image
          source={require("../../assets/screenElevenPic/chevron_right.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("screenEleven");
          }}
          style={styles.buttonStyle}
        >
          <Text>screen 11</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("screenTwelve");
          }}
          style={styles.buttonStyle}
        >
          <Text>screen 12</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("screenThirteen");
          }}
          style={styles.buttonStyle}
        >
          <Text>screen 13</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 32,
  },
  topContainer: {
    height: 289,
    backgroundColor: "#E31DDB",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 9,
  },
  personContainerBg: {
    height: 61,
    width: 61,
    border: "solid",
    borderWidth: 5,
    borderColor: "#ffffff",
    elevation: 3,
    borderRadius: 50,
  },
  personContainerBgMiddle: {
    height: 111,
    width: 110,
    border: "solid",
    borderWidth: 5,
    borderColor: "#ffffff",
    elevation: 3,
    borderRadius: 100,
  },
  personContainerPic: {
    height: 49,
    width: 30,
    position: "absolute",
    left: "20.89%",
    right: "66.11%",
    top: "8%",
  },
  personContainerPicMiddle: {
    height: 95,
    width: 61,
    position: "absolute",
    left: "20.89%",
    right: "66.11%",
    top: "8%",
  },
  personContainer: {
    alignItems: "center",
    opacity: 0.5,
  },
  personContainerMiddle: {
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
    fontSize: 11,
    textAlign: "center",
    color: "white",
  },
  personContainerTextMiddleHeading: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  personContainerTextMiddle: {
    fontSize: 14,
    color: "white",
  },
  personContainerBgColorFirst: {
    backgroundColor: "#DC8327",
  },
  personContainerBgColorSecond: {
    backgroundColor: "#D71623",
  },
  peopleContainerMain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    padding: 5,
  },
  timeContainer: {
    height: 46,
    width: 368,
    alignSelf: "center",
    backgroundColor: "white",
    position: "relative",
    borderRadius: 6,
    top: 23,
    flexDirection: "row",
  },
  firstTimeContainer: {
    width: 54,
    backgroundColor: "#F7B453",
    height: 46,
    borderBottomLeftRadius: 6,

    borderTopLeftRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  secondTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timePic: {
    width: 15,
    height: 15,
    marginLeft: 45,
  },
  backPic: {
    marginLeft: 100,
  },
  time: {
    fontSize: 16,
    marginLeft: 8,
  },
  middleContainer: {
    marginTop: 40,
    padding: 15,
    flex: 1,
  },
  classContainer: {
    borderWidth: 1,
    height: 107,
    width: 151,
    borderRadius: 8,
    paddingLeft: 12,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  classContainerColorFirst: {
    borderColor: "#EED0E7",
    backgroundColor: "#FEF1FB",
  },
  classContainerColorSecond: {
    borderColor: "#EEF7FE",
    backgroundColor: "#D3E3EF",
  },
  classContainerColorThird: {
    borderColor: "#F0FFF9",
    backgroundColor: "#C1E3D6",
  },
  classContainerColorFourth: {
    borderColor: "#FFFBEC",
    backgroundColor: "#FFE8C6",
  },
  classContainerColorFifth: {
    borderColor: "#FEFFF0",
    backgroundColor: "#DCE3C1",
  },
  classContainerColorSixth: {
    borderColor: "#F1FEF6",
    backgroundColor: "#DEECDF",
  },

  classContainerPic: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  classContainerHeading: {
    fontSize: 18,
    marginBottom: 9,
  },
  parentClassContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  classContainerSecond: {
    marginLeft: "auto",
    marginRight: 6,
    backgroundColor: "#FEF1FB",
    borderWidth: 1,
    borderColor: "#EED0E7",
    height: 107,
    width: 151,
    borderRadius: 8,
    paddingLeft: 12,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  bottomContainer: {
    height: 70,
    marginLeft: 17,
    marginRight: 17,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  classContainerHeadingColorSix: {
    color: "#984986",
  },
  classContainerHeadingColorFive: {
    color: "#00814E",
  },
  classContainerHeadingColorFour: {
    color: "#D66E53",
  },
  classContainerHeadingColorThree: {
    color: "#00814E",
  },
  classContainerHeadingColorTwo: {
    color: "#415EB6",
  },
  classContainerHeadingColorOne: {
    color: "#984986",
  },
  bottomText: {
    fontSize: 24,
    color: "#3EB8D4",
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

export default ScreenEleven;
