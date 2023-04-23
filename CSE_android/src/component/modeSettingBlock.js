import { View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import * as React from "react";
import RadioButtonComponent from "./RadioButtonComponent";
import { ModeChoices, SafeModeChoices } from "../config/mode";
function ModeSettingBlock({ condition }) {
  const tailwind = useTailwind();
  return (
    <View style={tailwind("text-xl w-[90%] ")}>
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
          <View style={tailwind("bg-white m-2 px-4 py-2")}>
            <Text style={tailwind("font-extrabold text-lg")}>Mode</Text>
            <RadioButtonComponent listChoice={ModeChoices} />
          </View>
          
          <View style={tailwind("bg-white m-2 px-4 py-2")}>
            <Text style={tailwind("font-extrabold text-lg")}>Normal range</Text>
          </View>

          <View style={tailwind("bg-white m-2 px-4 py-2")}>
            <Text style={tailwind("font-extrabold text-lg")}>Safe mode</Text>
            <RadioButtonComponent listChoice={SafeModeChoices} />
          </View>

          <View style={tailwind("bg-white m-2 px-4 py-2")}>
            <Text style={tailwind("font-extrabold text-lg")}>Safe range</Text>
          </View>
        </View>
        <View style={tailwind("h-2")}></View>
      </View>
      <View style={tailwind("h-2 ")}></View>
      <View></View>
    </View>
  );
}

export default ModeSettingBlock;
