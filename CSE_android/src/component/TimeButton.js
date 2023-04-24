import React, { useState } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useTailwind } from "tailwind-rn";
import ModeSettingContext from "../context/modeSettingContext";

const TimeButton = ({ type, mode }) => {
  const tailwind = useTailwind();
  const [showPicker, setShowPicker] = useState(false);
  const { modeSetting, setModeSetting } = React.useContext(ModeSettingContext);
  const [time, setTime] = useState(() => {
    const date = new Date();
    const usingTime = type
      ? modeSetting[mode]["schedEnd"]
      : modeSetting[mode]["schedStart"];
    date.setHours(Number(usingTime.substring(0, 2)));
    date.setMinutes(Number(usingTime.substring(3, 5)));
    return date;
  });
  console.log(modeSetting);
  console.log(modeSetting[mode]);
  const handleTimeConfirm = (selectedTime) => {
    setTime(selectedTime);
    setShowPicker(false);
  };

  const showTimePicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={tailwind("flex flex-row items-center")}>
      <Text style={tailwind("text-[15px]")}>{type ? "To:" : "From:"}</Text>
      <View style={tailwind("bg-[#D9D9D9] px-3 py-1 rounded-lg ml-3")}>
        <TouchableOpacity onPress={showTimePicker}>
          <Text style={tailwind("font-semibold")}>
            {time.getHours() + ":" + time.getMinutes()}
          </Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={showPicker}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={() => setShowPicker(false)}
      />
    </View>
  );
};

export default TimeButton;
