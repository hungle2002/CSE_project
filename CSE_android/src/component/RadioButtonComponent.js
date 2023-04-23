import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import ModeSettingContext from "../context/modeSettingContext";

const RadioButtonComponent = ({ listChoice }) => {
  const { modeSetting, setModeSetting } = React.useContext(ModeSettingContext);
  const [value, setValue] = React.useState(0);

  return (
    <View>
      <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
      >
        {listChoice.map((e, index) => (
          <RadioButton.Item key={index} label={e} value={index} />
        ))}
      </RadioButton.Group>
    </View>
  );
};

export default RadioButtonComponent;
