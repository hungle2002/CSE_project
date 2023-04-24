import { Text, View, Switch } from "react-native";
import React ,{useState} from "react"; 

import { useTailwind } from "tailwind-rn";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBuildingShield
} from "@fortawesome/free-solid-svg-icons"

function SercurityScreen() {
  const tailwind=useTailwind()
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={tailwind('p-4')}>
      <View style={tailwind('flex flex-row items-center')}>
        <FontAwesomeIcon icon={faBuildingShield} size={30} />
        <Text style={tailwind('text-xl pl-4 font-medium')}>Security Mode</Text>
      </View>
      <View style={tailwind('flex flex-row items-center self-end')}>
        <Switch
          style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <Text style={tailwind('text-lg pl-4 text-slate-500 w-[70px]')}>{isEnabled ? 'ON' : 'OFF'}</Text>
      </View>
      
    </View>
  );
}

export default SercurityScreen;
