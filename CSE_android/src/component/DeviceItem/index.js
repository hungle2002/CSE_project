import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native';
import { useTailwind } from "tailwind-rn";
import { devicesImage } from "./data";

const DeviceItem = ({device}) =>{
  const tailwind = useTailwind();
  console.log(device)
  return(<View style={tailwind('flex flex-row p-1 items-center justify-between')}>
      <View style={tailwind('flex flex-row p-1 items-center')}>
        <Image source={devicesImage[device.key]} style={tailwind('w-[40px] h-[40px]')} />
        <Text style={tailwind('text-xl px-3')}>{device.des}</Text>
      </View>
      <Button 
        title="Good"
        color="#C9F7F5"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
  </View>)
}

export default DeviceItem;