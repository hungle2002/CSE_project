import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';
import { useTailwind } from "tailwind-rn";
import { devicesImage } from "./data";

const DeviceItem = ({device}) =>{
  const tailwind = useTailwind();
  console.log(device)
  return(<View>
      <Image source={devicesImage[device.key]} style={tailwind('w-[30px]')} />
     <Text style={styles.title}>{device.des}</Text>
  </View>)
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

export default DeviceItem;