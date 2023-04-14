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
      min: 150,
      max: 200,
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
        color: "black"
      }
    }
    else if (value > end) {
      return {
        text: "High",
        color: "red"
      }
    }
    return {
      text: "Low",
      color: "#031cab"
    }
  }

  return (
    <View
      style={tailwind(
        "w-full h-full flex-1 flex-col justify-evenly items-center"
      )}
    >
      {data.map((item) => (
        <View
          style={item.styles}
          key={item.name}
        >
          {/* <View style={tailwind("w-1/2 h-full bg-black")}>

          </View> */}
          <View style={styles.blockContainer}>
              <View style={styles.leftContent}>
                <FontAwesomeIcon icon={item.icon} size={48} />
                <View style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%"
                }}>
                  <Text style={{
                    fontSize: 32,
                    paddingEnd: 6
                  }}>{item.value}</Text>
                  <Text style={{
                    fontSize: 16,
                    width: "50%"
                  }}>{item.unit}</Text>
                </View>
                <Text style={{
                    fontSize: 16
                  }}>{item.name}</Text>
              </View>
          </View>

          <View style={styles.rightContent}>
            <View style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "100%",
            }}>
              <Text style={{
                width: "100%",
                textAlign: "center",
                fontSize: 18,
                marginBottom: 12,
              }}>{item.mode.toUpperCase()}</Text>
            <Text style={{
                width: "100%",
                textAlign: "center",
                marginBottom: 4,
              }}>{item.modeText}</Text>
            <Text style={{
                width: "100%",
                textAlign: "center",
                fontSize: 16,
                marginBottom: 40,
              }}>{`${item.min} - ${item.max} ${item.unit}`}</Text>
            <View style={{
              width: "30%",
              height: "15%",
              alignSelf: "center",
              borderRadius: 20,
              borderWidth: 1,
              borderColor: getStatusDisplay(item.value, item.min, item.max).color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <Text style={{
                  width: "100%",
                  textAlign: "center",
                  color: getStatusDisplay(item.value, item.min, item.max).color
                }}>{getStatusDisplay(item.value, item.min, item.max).text}</Text>
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
    alignItems: "center"
  },
  lighting: {
    backgroundColor: "#D1EED8",
    width: "90%",
    height: "30%",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  soilMoisture: {
    backgroundColor: "#F0F6D2",
    width: "90%",
    height: "30%",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  blockContainer: {
    width: "50%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: "white",
    borderRightWidth: 1
  },
  leftContent: {
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  rightContent: {
    width: "50%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start"
  }
});

export default DashboardScreen;
