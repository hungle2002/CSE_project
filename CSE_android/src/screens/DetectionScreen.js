import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useTailwind } from "tailwind-rn";
import { useState, useCallback } from "react";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function DetectionScreen() {
  const tailwind = useTailwind();
  const [isLoading, setIsLoading] = useState(0);
  const [isCompleted, setIsCompleted] = useState(0);

  const handleSearching = async () => {
    setIsLoading(1);
    await delay(2000);
    setIsLoading(0);
    setIsCompleted(1);
  };

  const handleReturn = () => {
    setIsCompleted(0);
  };

  return (
    <View
      style={tailwind(
        "flex flex-col mx-auto w-full h-full px-2 items-center pt-10 bg-white"
      )}
    >
      <Image
        source={require("../../assets/drone.png")}
        style={{ width: 280, height: 200 }}
      />
      <View>
        <Text style={tailwind("text-xl font-bold text-center pb-3 mt-6")}>
          Detecting drone
        </Text>
        {isCompleted == 0 && (
          <Image
            source={require("../../assets/high-battery.png")}
            style={{ width: 200, height: 50, objectFit: "contain" }}
          />
        )}
        {isCompleted == 1 && (
          <Image
            source={require("../../assets/low-battery.png")}
            style={{ width: 200, height: 50, objectFit: "contain" }}
          />
        )}
      </View>
      <View
        style={tailwind("border w-80 h-56 mt-10 items-center justify-center")}
      >
        {isLoading == 1 && (
          <View>
            <ActivityIndicator
              style={tailwind("mb-2")}
              size={50}
              color="gray"
            />
            <Text>Waiting...</Text>
          </View>
        )}
        {isCompleted == 1 && (
          <View>
            <Image
              source={require("../../assets/leafdisease.png")}
              style={{ width: 220, height: 180, objectFit: "contain" }}
            />
            <Text style={tailwind("text-center text-lg")}>Part B: col 8</Text>
          </View>
        )}
      </View>
      <View style={tailwind("mt-6")}>
        {isCompleted == 0 && isLoading == 0 && (
          <TouchableOpacity
            style={tailwind("px-6 py-3 bg-green-700 rounded-lg")}
            onPress={handleSearching}
          >
            <Text style={tailwind("text-white font-bold ")}>Start</Text>
          </TouchableOpacity>
        )}
        {isCompleted == 1 && (
          <TouchableOpacity
            style={tailwind("px-6 py-3 bg-[#3699FF] rounded-lg")}
            onPress={handleReturn}
          >
            <Text style={tailwind("text-white font-bold ")}>Return</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default DetectionScreen;
