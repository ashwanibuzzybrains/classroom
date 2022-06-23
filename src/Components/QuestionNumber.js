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

let { width, height } = Dimensions.get("window");

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const QuestionNumber = (props) => {
  const { item } = props;
  const { isSelected, number } = item;
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionNumberContent}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  questionContainer: {},
  questionNumberContent: {},
});
export default QuestionNumber;
