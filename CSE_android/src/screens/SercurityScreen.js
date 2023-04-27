import { Text, View, Switch,TouchableOpacity } from "react-native";
import React ,{useState} from "react"; 
import { useTailwind } from "tailwind-rn";
import Voice from '@react-native-voice/voice';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBuildingShield
} from "@fortawesome/free-solid-svg-icons"
import DetectionBox from "../component/DetectionBox";
import { create } from "../apiServices/searchService";
function SercurityScreen() {
  //////////////////////////////////////////////////////////////////////////
  const [result, setResult] =React.useState('aaaa')
  const [isRecord, setRec]=React.useState(false)
  Voice.onSpeechStart = () => setRec(true)
  Voice.onSpeechEnd = () => setRec(false)
  Voice.onSpeechResults = result => setResult(result.value[0]) 
  //////////
  const startRec = async () => {
    if(Voice){
      try {
        console.log('start')
        await Voice.start('en-US')
        console.log('olalala')
      }
      catch(error) {
        console.log(error);
      }
    }
  }
  const stopRec = async () => {
    try {
      console.log('end')
      await Voice.stop()
    }
    catch(error) {
      console.log(error);
    }
  }

  ////////////////////////////////////////////////////////////////////////////
  const tailwind=useTailwind()
  const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = async () =>{
  //   try {
  //     setIsEnabled(previousState => !previousState);
  //     console.log('log Message', !isEnabled);
  //     const update_value = !isEnabled;
  //     await create({
  //       path: `device/cs-ce-dadn.coolingmotor/state`,
  //       data: { value: update_value },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const toggleSwitch = () =>setIsEnabled(previousState => !previousState);
  
  const handleButton = async ()=>{
    try {
      console.log("aaaaa");
        await create({
          path: `device/cs-ce-dadn.coolingmotor/state`,
          data: { value: 1 },
        });
    } catch (error) {
      console.log(error);
    }
  }
    
  return (
    <View style={tailwind('p-4')}>
      <View style={tailwind('flex flex-row items-center')}>
        <FontAwesomeIcon icon={faBuildingShield} size={30} />
        <Text style={tailwind('text-xl pl-4 font-medium')}>Security Mode</Text>
      </View>
      <View style={tailwind('flex flex-row items-center self-end pb-8')}>
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
      {/* <TouchableOpacity style={tailwind('w-[70px] h-[40px] bg-cyan-100 justify-center items-center rounded-full')} onPress={() => isRecord? stopRec():startRec()}>
        <Text style={tailwind('text-teal-500 text-lg')}>Good</Text>
      </TouchableOpacity>
      <Text >{isRecord? 'isRecord':'Not Record'}</Text>
      <Text >{result}</Text> */}
      <DetectionBox/>
      
    </View>
  );
}

export default SercurityScreen;
