import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const HomePage = ({ navigation }) => {
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("screenProgress");
        }}
        style={styles.buttonStyle}
      >
        <Text>screen progress</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("screenLogin");
        }}
        style={styles.buttonStyle}
      >
        <Text>screen login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginLeft: 20,
    height: 30,
    width: 200,
    backgroundColor: "#faf087",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    marginBottom: 20,
    marginTop: 30,
    alignItems: "center",
  },
});

export default HomePage;
