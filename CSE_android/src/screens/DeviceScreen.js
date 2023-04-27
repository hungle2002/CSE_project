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
import { search } from "../apiServices/searchService";
import React, {useEffect,useState, useRef} from "react";

function DeviceScreen({ navigation }) {
  const [deviceInfo, setDeviceInfo] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const [DATA, setDATA] = useState([])
  const fetchAPI = React.useCallback(async () => {
    try {
      const SampleData = [
        {
          title: 'Input Sensor',
          data: [],
        },
        {
          title: 'Output Motor',
          data: [],
        },
      ];
      const response = await search({ path: `device` });
      response.devices.forEach((e) => {
        if(e.typ == "Sensor"){
          SampleData[0].data.push(e);
        }
        else SampleData[1].data.push(e);
      });
      setDATA(SampleData)
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    fetchAPI();
  }, []);
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await fetchAPI();
    setRefreshing(false);
  }, []);
  const tailwind=useTailwind()
  return (
    <View style={tailwind('px-4')}>
      <SectionList
      sections={DATA}
      extraData={DATA}
      refreshing= {refreshing}
      onRefresh={onRefresh}
      keyExtractor={(item, index) => {
        return(item + index)}
      }
      renderItem={({item}) => {
        return(<DeviceItem device={item}/>)}}
      renderSectionHeader={({section: {title}}) => (
        <Text style={tailwind('text-2xl py-5')}>{title}</Text>
      )}/>
    </View>
  );
}
// 
export default DeviceScreen;
