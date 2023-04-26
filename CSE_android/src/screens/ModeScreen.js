import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import { useTailwind } from "tailwind-rn";
import React from "react";
import { Button } from "react-native-paper";
import { FontAwesome } from "react-native-vector-icons";
import config from "../config";
import ModeSettingBlock from "../component/modeSettingBlock";
import ModeSettingContext from "../context/modeSettingContext";
import { DefaultModeSetting } from "../config/mode";
import Loading from "../component/Loading";
import { search, update } from "../apiServices/searchService";

function ModeScreen({ navigation }) {
  const tailwind = useTailwind();
  const [modeSetting, setModeSetting] = React.useState(DefaultModeSetting);
  const [isLoading, setIsLoading] = React.useState(0);

  React.useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await search({
          path: "condition",
        });
        setModeSetting(response.condition);
        console.log(modeSetting);
      } catch (error) {
        console.log("error");
      }
    };
    fetchAPI();
  }, []);

  const handleSaveSetting = () => {
    setIsLoading(1);
    const updateAPI = async () => {
      try {
        await update({
          path: `settings`,
          data: modeSetting,
        });
      } catch (error) {
        console.log("error");
      }
    };
    updateAPI();

    setTimeout(() => {
      setIsLoading(-1);
      setTimeout(() => {
        setIsLoading(0);
      }, 500);
    }, 100);
    console.log("Save mode setting!");
    console.log(modeSetting);
  };

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
          onPress={handleSaveSetting}
          buttonColor="#0A7514"
          textColor="white"
        >
          Save
        </Button>
      </View>

      {isLoading !== 0 && (
        <Loading>
          {isLoading == 1 && (
            <View>
              <ActivityIndicator size={50} color="white" />
            </View>
          )}
          {isLoading == -1 && (
            <View style={tailwind("bg-white px-4 py-4 rounded-lg -mt-10")}>
              <FontAwesome
                style={tailwind("mx-auto")}
                name="check-circle"
                size={40}
                color="#00ff00"
              />
              <Text style={tailwind("mt-4 text-[16px] font-semibold")}>
                Update successfully!
              </Text>
            </View>
          )}
        </Loading>
      )}
    </View>
    // </ModeSettingContext.Provider>
  );
}

export default ModeScreen;
