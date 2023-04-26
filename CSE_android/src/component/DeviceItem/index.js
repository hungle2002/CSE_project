import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';
import { useTailwind } from "tailwind-rn";
import { devicesImage } from "./data";
const handleButton = () =>{
  console.log('log Message');
}
const DeviceItem = ({device}) =>{
  const tailwind = useTailwind();
  console.log(device)
  return(<View style={tailwind('flex flex-row p-1 items-center justify-between')}>
      <View style={tailwind('flex flex-row p-1 items-center')}>
        <Image source={devicesImage[device.key]} style={tailwind('w-[40px] h-[40px]')} />
        <Text style={tailwind('text-xl px-3')}>{device.des}</Text>
      </View>
      <TouchableOpacity style={tailwind('w-[70px] h-[40px] bg-cyan-100 justify-center items-center rounded-full')} onPress={() => handleButton}>
        <Text style={tailwind('text-teal-500 text-lg')}>Good</Text>
      </TouchableOpacity>
  </View>)
}

export default DeviceItem;