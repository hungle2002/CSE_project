import { Text, View } from "react-native";
import { Button } from "react-native";
import DeviceItem from '../component/DeviceItem';
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
  return (
    <View style={styles.container}>
      <Text>aaaaaaa</Text>
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <DeviceItem device={item}/>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}/>
    </View>
    // <View>
    //   <Text>This is DeviceScreen22 </Text>
    //   <DeviceBoard/>
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
export default DeviceScreen;
