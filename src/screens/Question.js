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
  FlatList,
} from "react-native";
import QuestionNumber from "../Components/QuestionNumber";
import Options from "../Components/Options";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
let { width, height } = Dimensions.get("window");

const Question = () => {
  const questionNumber = [
    { isSelected: false, number: 4 },
    { isSelected: false, number: 5 },
    { isSelected: false, number: 6 },
    { isSelected: false, number: 7 },
    { isSelected: false, number: 8 },
    { isSelected: false, number: 9 },
    { isSelected: true, number: 10 },
  ];

  const optionsArray = [
    { isChoose: false, text: "कृतज्ञ" },
    { isChoose: false, text: "कृतध्न" },
    { isChoose: false, text: "अपकार" },
    { isChoose: false, text: "अनुदार" },
  ];

  return (
    <View style={styles.mainBg}>
      <View style={styles.topContainer}>
        <Image
          style={styles.leftSymbol}
          source={require("../../assets/screenThirteenPic/Vector.png")}
        />
        <Text style={styles.subjectName}>स्मशानातील सोनं</Text>
        <View style={styles.timeContainer}>
          <Image source={require("../../assets/screenElevenPic/Vector.png")} />
          <Text>16:35</Text>
        </View>
      </View>
      <View style={styles.questionContainer}>
        <FlatList
          data={questionNumber}
          renderItem={({ item }) => <QuestionNumber item={item} />}
        />
        <View style={styles.mainQuestionContainer}>
          <View style={styles.justMainQuestionContainer}>
            <Text>10</Text>
          </View>
          <Text style={styles.justMainQuestionContent}>
            विरुध्दार्थी शब्द ओळखा- उपकार
          </Text>
          <FlatList
            data={optionsArray}
            renderItem={({ item }) => <Options item={item} />}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBg: {
    flex: 1,
    marginTop: 28,
    backgroundColor: "#245BA5",
  },
  topContainer: {
    flexDirection: "row",
    paddingLeft: 22,
    height: 50,
    alignItems: "center",
  },
  leftSymbol: {},
  subjectName: {
    color: "white",
    fontWeight: "800",
    fontSize: 18,
    marginLeft: 16,
  },
  timeContainer: {
    marginLeft: "auto",
    marginRight: 22,
    flexDirection: "row",
    alignItems: "center ",
  },
  questionContainer: {
    backgroundColor: "white",
  },
  mainQuestionContainer: {},
  justMainQuestionContainer: {},
  justMainQuestionContent: {},
});
export default Question;
