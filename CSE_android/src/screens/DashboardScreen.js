import { Text, View, StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faThermometerQuarter,
  faCloudSun,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

function DashboardScreen({ navigation }) {
  const tailwind = useTailwind();

  const data = [
    {
      name: "Temperature",
      unit: "°C",
      value: 24,
      mode: "Automatic",
      modeText: "Keep between",
      min: 15,
      max: 30,
      styles: styles.temperature,
      icon: faThermometerQuarter,
    },
    {
      name: "Lighting",
      unit: "W/m²",
      value: 149,
      mode: "Scheduled",
      modeText: "On from",
      min: "06:00",
      max: "14:00",
      styles: styles.lighting,
      icon: faCloudSun,
    },
    {
      name: "Soil moisture",
      unit: "%",
      value: 86,
      mode: "Manual",
      modeText: "Alert when outside",
      min: 65,
      max: 85,
      styles: styles.soilMoisture,
      icon: faDroplet,
    },
  ];

  const getStatusDisplay = (value, start, end) => {
    if (value > start && value < end) {
      return {
        text: "Good",
        color: "black",
      };
    } else if (value > end) {
      return {
        text: "High",
        color: "red",
      };
    }
    return {
      text: "Low",
      color: "#031cab",
    };
  };

  return (
    <View
      style={tailwind(
        "w-full h-full flex-1 flex-col justify-evenly items-center"
      )}
    >
      {data.map((item) => (
        <View style={item.styles} key={item.name}>
          {/* <View style={tailwind("w-1/2 h-full bg-black")}>

          </View> */}
          <View style={styles.blockContainer}>
            <View style={styles.leftContent}>
              <View style={tailwind("flex items-center")}>
                <View style={tailwind("flex items-start w-full")}>
                  <FontAwesomeIcon icon={item.icon} size={48} />
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "100%",
                      marginTop: 10,
                    }}
                  >
                    <Text style={tailwind("text-3xl font-bold mr-1")}>
                      {item.value}
                    </Text>
                    <Text style={tailwind("text-xl")}>{item.unit}</Text>
                  </View>
                </View>
                <Text style={tailwind("mt-2 text-lg")}>{item.name}</Text>
              </View>
            </View>
          </View>

          <View style={styles.rightContent}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text style={tailwind("text-lg font-semibold mt-6")}>
                {item.mode.toUpperCase()}
              </Text>
              <Text style={tailwind("mt-2")}>{item.modeText}</Text>
              <Text style={tailwind("text-lg pt-1 mb-6")}>
                {`${item.min} - ${item.max}`} {item.mode !== "Scheduled" && <Text>{item.unit}</Text>}
              </Text>

              <View
                style={{
                  width: "30%",
                  height: "15%",
                  alignSelf: "center",
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: getStatusDisplay(item.value, item.min, item.max)
                    .color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    width: "100%",
                    textAlign: "center",
                    color: getStatusDisplay(item.value, item.min, item.max)
                      .color,
                  }}
                >
                  {getStatusDisplay(item.value, item.min, item.max).text}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  temperature: {
    backgroundColor: "#D0EFF5",
    width: "90%",
    height: "30%",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  lighting: {
    backgroundColor: "#D1EED8",
    width: "90%",
    height: "30%",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  soilMoisture: {
    backgroundColor: "#F0F6D2",
    width: "90%",
    height: "30%",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  blockContainer: {
    width: "50%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "white",
    borderRightWidth: 1,
  },
  leftContent: {
    width: "65%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  rightContent: {
    width: "50%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default DashboardScreen;
