import { View, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import React from "react";
import config from "../config";
import ModeSettingBlock from "../component/modeSettingBlock";
import ModeSettingContext from "../context/modeSettingContext";
import { DefaultModeSetting } from "../config/mode";
import { Button } from "react-native-paper";
function ModeScreen({ navigation }) {
  const tailwind = useTailwind();
  const [modeSetting, setModeSetting] = React.useState(DefaultModeSetting);
  return (
    // <ModeSettingContext.Provider value={{ modeSetting, setModeSetting }}>
    <View style={tailwind(" w-[100%] h-[100%]")}>
      <ModeSettingContext.Provider value={{ modeSetting, setModeSetting }}>
        <ScrollView style={tailwind("flex flex-col ml-5 w-[100%]")}>
          {config.conditions.map((condition, index) => (
            <ModeSettingBlock key={index} condition={condition} mode={index} />
          ))}
        </ScrollView>
      </ModeSettingContext.Provider>
      <View style={tailwind(" absolute bottom-3 right-3")}>
        <Button
          mode="elevated"
          onPress={() => console.log("Save mode setting!")}
          buttonColor="#0A7514"
          textColor="white"
        >
          Save
        </Button>
      </View>
    </View>
    // </ModeSettingContext.Provider>
  );
}

export default ModeScreen;
