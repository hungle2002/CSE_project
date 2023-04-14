import { ScrollView, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import React from "react";
import config from "../config";
import ModeSettingBlock from "../component/modeSettingBlock";

function ModeScreen({ navigation }) {
  const tailwind = useTailwind();

  return (
    <ScrollView style={tailwind("flex flex-col items-center px-2")}>
      {config.conditions.map((condition, index) => (
        <ModeSettingBlock key={index} condition={condition} />
      ))}
    </ScrollView>
  );
}

export default ModeScreen;
