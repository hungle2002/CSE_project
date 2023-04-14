import { View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import { RadioButton } from "react-native-paper";
import * as React from "react";

function ModeSettingBlock({ condition }) {
  const tailwind = useTailwind();
  const [checked, setChecked] = React.useState("first");
  return (
    <View style={tailwind("text-xl w-[100%] ")}>
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
            <Text style={tailwind("font-semibold")}>Mode</Text>
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
      <View>
        <RadioButton.Group
          onValueChange={(value) => setChecked(value)}
          value={checked}
        >
          <RadioButton.Item label="First item" value="first" />
          <RadioButton.Item label="Second item" value="second" />
          <RadioButton.Item label="Third item" value="third" />
        </RadioButton.Group>
      </View>
    </View>
  );
}

export default ModeSettingBlock;
