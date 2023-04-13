import { View, Text, TouchableOpacity } from "react-native";
import * as React from "react";

function ModeSettingBlock({ mode }) {
  return (
    <View>
      <Text>This is {mode.title}</Text>
    </View>
  );
}

export default ModeSettingBlock;
