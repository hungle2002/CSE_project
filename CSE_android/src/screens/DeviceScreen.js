import { Text, View } from "react-native";
import { Button } from "react-native";
import DeviceItem from '../component/DeviceItem';
import { useTailwind } from "tailwind-rn";
import {
  StyleSheet,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';
const Sensor =[
  {
    des: "Temparature",
    key:"cs-ce-dadn.temp-sensor"
  },
  {
    des: 'Lighting',
    key:"cs-ce-dadn.sun-sensor"
  },
  {
    des: 'Humid',
    key:"cs-ce-dadn.humi-sensor"
  },
  {
    des: 'Smoke',
    key:"cs-ce-dadn.smokesensor"
  },
  {
    des: 'Soil Moisture',
    key:"cs-ce-dadn.earth-humi-sensor"
  }
];
const Motor =[
  {
    des: 'Water Pump',
    key:"cs-ce-dadn.motor"
  },
  {
    des: 'Cooling Fan',
    key:"cs-ce-dadn.coolingmotor"
  },
  {
    des: 'LCD',
    key:"cs-ce-dadn.lcdmotor"
  },
  {
    des: 'LCD',
    key:"cs-ce-dadn.lcdmotor"
  },
  {
    des: 'LCD',
    key:"cs-ce-dadn.lcdmotor"
  },
  {
    des: 'LCD',
    key:"cs-ce-dadn.lcdmotor"
  },
];
const DATA = [
  {
    title: 'Input Sensor',
    data: Sensor,
  },
  {
    title: 'Output Motor',
    data: Motor,
  },
];
function DeviceScreen({ navigation }) {
  const tailwind=useTailwind()
  return (
    <View style={tailwind('px-4')}>
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <DeviceItem device={item}/>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={tailwind('text-2xl py-5')}>{title}</Text>
      )}/>
    </View>
  );
}
// 
export default DeviceScreen;
