import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const ButtonContainer = ({ navigation }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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

export default ButtonContainer;
