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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { PieChart as DonutChart } from "react-native-gifted-charts";

// import PieChart from "react-native-pie-chart";
// import BarChart from "react-native-bar-chart";

// import Pie from "react-native-pie";
// import SvgUri from "react-native-svg-uri";

// import SvgUri from "react-native-svg";

let { width, height } = Dimensions.get("window");

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ScreenProgress = () => {
  {
    /* <Image
          style={styles.pieChart}
          source={require("../../assets/screenProgressPic/PieChart.png")}
        /> */
  }
  // const widthAndHeight = 250;
  // const series = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140];
  // const sliceColor = ["#F44336", "#2196F3", "#FFEB3B", "#4CAF50", "#FF9800"];
  // const data = [
  //   [70, -5],
  //   [80, -10],
  //   [110, 0],
  //   [100, 0],
  //   [280, -60],
  // ];
  // // labels
  // const horizontalData = ["Batch1", "Batch2", "Batch3", "Batch4", "Batch5"];
  const dataBar = {
    labels: ["Batch1", "Batch2", "Batch3", "Batch4", "Batch5"],
    datasets: [
      {
        data: [110, 80, 85, 95, 60],
      },
    ],
  };

  const screenWidthBar = width - 40;
  const screenWidthPie = width - 40;
  const chartConfigBar = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(52, 213, 235, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  const chartConfigPie = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(52, 213, 235, ${opacity})`,
    strokeWidth: 2, // optional, default 3

    useShadowColorFromDataset: false,
  };
  const dataDonutRefrence = [
    { value: 30 },
    { value: 25 },
    { value: 20 },
    { value: 15 },
    { value: 10 },
  ];
  const dataDonut = [
    {
      value: 30,
      text: `गणित ${dataDonutRefrence[0].value}%`,
      color: "#1AA37A",
      shiftTextY: wp(3),
      shiftTextX: wp(-3),
      key: 1,
    },
    {
      value: 25,
      text: `भूमिती ${dataDonutRefrence[1].value}%`,
      color: "#C15CFF",
      shiftTextX: wp(-3),
      key: 2,
    },
    {
      value: 20,
      text: `भूगोल ${dataDonutRefrence[2].value}%`,
      color: "#FFEAC0",
      key: 3,
    },
    {
      value: 15,
      text: `इतिहास  ${dataDonutRefrence[3].value}%`,
      color: "#39CEF3",
      shiftTextY: wp(1),
      shiftTextX: wp(-3),
      key: 4,
    },
    {
      value: 10,
      text: `मराठी  ${dataDonutRefrence[4].value}%`,
      color: "#FF4444",
      shiftTextX: wp(-4),
      key: 5,
    },
  ];
  const dataPie = [
    {
      name: "इतिहास",
      percent: 25,
      color: "#9DFFB3",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      key: 1,
    },
    {
      name: "भूमिती",
      percent: 10,
      color: "#C15CFF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      key: 2,
    },
    {
      name: "भूगोल",
      percent: 35,
      color: "#39CEF3",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      key: 3,
    },
    {
      name: "मराठी ",
      percent: 30,
      color: "#FFEAC0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
      key: 4,
    },
  ];

  return (
    <ScrollView style={styles.mainBgContainer}>
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
        <PieChart
          style={styles.pieChart}
          data={dataPie}
          width={screenWidthPie}
          height={screenWidthPie - 120}
          chartConfig={chartConfigPie}
          accessor={"percent"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          absolute={false}
        />
      </View>
      <Text style={styles.subjectHeadingTime}>
        अभ्यासाचा ऐकून वेळ: 0 मिनिटे 42 सेकंड्स
      </Text>
      <View style={styles.subjectMainContainer}>
        <View style={styles.subjectSubContainer}>
          <View
            style={[styles.subjectContainer, styles.subjectContainerColorOne]}
          >
            <Text
              style={[
                styles.subjectContainerHeading,
                styles.subjectContentColorOne,
              ]}
            >
              गणित
            </Text>
            <Text
              style={[
                styles.subjectContainerContent,
                styles.subjectContentColorOne,
              ]}
            >
              आवडता विषय
            </Text>
          </View>
          <View
            style={[styles.subjectContainer, styles.subjectContainerColorTwo]}
          >
            <Text
              style={[
                styles.subjectContainerHeading,
                styles.subjectContentColorTwo,
              ]}
            >
              5248
            </Text>
            <Text
              style={[
                styles.subjectContainerContent,
                styles.subjectContentColorTwo,
              ]}
            >
              जिल्हास्तरीय रँक
            </Text>
          </View>
        </View>
        <View style={styles.subjectSubContainer}>
          <View
            style={[styles.subjectContainer, styles.subjectContainerColorThree]}
          >
            <Text
              style={[
                styles.subjectContainerHeading,
                styles.subjectContentColorThree,
              ]}
            >
              102
            </Text>
            <Text
              style={[
                styles.subjectContainerContent,
                styles.subjectContentColorThree,
              ]}
            >
              तालुकास्तरीय रँक
            </Text>
          </View>
          <View
            style={[styles.subjectContainer, styles.subjectContainerColorFour]}
          >
            <Text
              style={[
                styles.subjectContainerHeading,
                styles.subjectContentColorFour,
              ]}
            >
              13
            </Text>
            <Text
              style={[
                styles.subjectContainerContent,
                styles.subjectContentColorFour,
              ]}
            >
              शाळास्तरीय रँक{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.barChartContainer}>
        <Text style={styles.barChartHeading}>अभ्यासातील सातत्य</Text>
        <BarChart
          style={styles.barChart}
          data={dataBar}
          width={screenWidthBar}
          height={220}
          yAxisLabel=""
          fromZero={true}
          chartConfig={chartConfigBar}
          verticalLabelRotation={0}
        />
      </View>
      <View style={styles.donutChartContainer}>
        <DonutChart
          style={styles.donutChart}
          labelsPosition="outward"
          showValuesAsLabels
          showText
          data={dataDonut}
          donut
          textColor="black"
          focusOnPress={true}
          textSize={10}
        />
        <View></View>
      </View>
    </ScrollView>
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
    alignItems: "center",
    marginVertical: 30,
    backgroundColor: "white",
    alignItems: "center",
  },
  pieChart: {
    marginBottom: 30,
  },
  subjectHeadingTime: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  subjectContainer: {
    width: wp(40),
    // borderWidth: 1,
    borderRadius: 10,
    height: wp(30),
    margin: wp(4),
    justifyContent: "center",
    alignItems: "center",
  },
  subjectSubContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  subjectMainContainer: {
    marginTop: 20,
  },
  subjectContainerHeading: {
    fontSize: 40,
    fontWeight: "800",
  },
  subjectContainerContent: {
    fontSize: 18,
    fontWeight: "600",
  },
  subjectContentColorOne: {
    color: "#984986",
  },
  subjectContentColorTwo: {
    color: "#4B4998",
  },
  subjectContentColorThree: {
    color: "#3B8A02",
  },
  subjectContentColorFour: {
    color: "#D66E53",
  },
  subjectContainerColorOne: {
    backgroundColor: "#FEF1FB",
    borderWidth: 1,
    borderColor: "#EED0E7",
  },
  subjectContainerColorTwo: {
    backgroundColor: "#EEF7FE",
    borderWidth: 1,
    borderColor: "#D3E3EF",
  },
  subjectContainerColorThree: {
    backgroundColor: "#F0FFF9",
    borderWidth: 1,
    borderColor: "#C1E3D6",
  },

  subjectContainerColorFour: {
    backgroundColor: "#FFFBEC",
    borderWidth: 1,
    borderColor: "#FFE8C6",
  },
  barChartHeading: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: "500",
  },
  barChart: { marginLeft: 20, marginVertical: 30 },
  donutChartContainer: {
    backgroundColor: "white",
    marginBottom: 20,
    width: width - 40,
    padding: 20,
    marginLeft: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ScreenProgress;
