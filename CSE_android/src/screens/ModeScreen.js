import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import React from "react";
import config from "../config";

function ModeScreen({ navigation }) {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("flex flex-col items-center px-2")}>
      {config.conditions.map((condition, index) => (
        <View key={index} style={tailwind("text-xl w-[100%] ")}>
          <View
            style={{
              backgroundColor: condition.color,
              borderRadius: 10,
            }}
          >
            <View style={tailwind("px-2 ")}>
              <View>
                <Text style={tailwind("text-xl mx-2 mt-2 font-semibold")}>
                  {condition.title}
                </Text>
              </View>
              <View style={tailwind("bg-white mx-2 mt-2 px-4 py-2")}>
                <Text style={tailwind("font-semibold text-lg")}>Mode</Text>
                <View>
                  <View>
                    <Text>Automation</Text>
                  </View>
                  <Text>Scheduled</Text>
                  <Text>Manual</Text>
                </View>
              </View>
            </View>
            <View style={tailwind("h-4")}></View>
          </View>
          <View style={tailwind("h-2 ")}></View>
        </View>
      ))}
    </View>
  );
}

export default ModeScreen;
