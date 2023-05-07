import { View, Text, FlatList, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faDownload, faT, faTrash
} from "@fortawesome/free-solid-svg-icons"
import * as React from "react";

const data = [
  {
    LID: 1,
    time: "3/1/2023 15:00",
    description: "1 intruder detected"
  },
  {
    LID: 2,
    time: "3/1/2023 15:01",
    description: "1 intruder detected"
  },
  {
    LID: 3,
    time: "3/1/2023 15:02",
    description: "1 intruder detected"
  },
  {
    LID: 4,
    time: "3/1/2023 15:03",
    description: "1 intruder detected"
  },
  {
    LID: 5,
    time: "3/1/2023 15:04",
    description: "1 intruder detected"
  },
  {
    LID: 6,
    time: "3/1/2023 15:05",
    description: "1 intruder detected"
  },
  {
    LID: 7,
    time: "3/1/2023 15:06",
    description: "1 intruder detected"
  },
  {
    LID: 8,
    time: "3/1/2023 15:07",
    description: "1 intruder detected"
  },
  {
    LID: 9,
    time: "3/1/2023 15:08",
    description: "1 intruder detected"
  },
  {
    LID: 10,
    time: "3/1/2023 15:09",
    description: "1 intruder detected"
  },
  {
    LID: 11,
    time: "3/1/2023 15:10",
    description: "1 intruder detected"
  },
  {
    LID: 12,
    time: "3/1/2023 15:11",
    description: "1 intruder detected"
  },
  {
    LID: 13,
    time: "3/1/2023 15:12",
    description: "1 intruder detected"
  },
  {
    LID: 14,
    time: "3/1/2023 15:04",
    description: "1 intruder detected"
  },
  {
    LID: 15,
    time: "3/1/2023 15:04",
    description: "1 intruder detected"
  },
  {
    LID: 16,
    time: "3/1/2023 15:03",
    description: "1 intruder detected"
  },
];

function DetectionBox() {
  const tailwind = useTailwind();
  const [checked, setChecked] = React.useState("first");
  return (
    <View style={tailwind("flex flex-col")}>
      <View style={tailwind("justify-between flex flex-row border-b pb-1")}>
        <Text style={tailwind("text-xl font-bold pl-3")}>Intruder detection</Text>
        <View style={tailwind("flex flex-row")}>
          <FontAwesomeIcon icon={faDownload} size={30} />
          <View style={tailwind("px-2")}></View>
          <FontAwesomeIcon icon={faTrash} size={30}/>
        </View>
      </View>
      <View style={tailwind("justify-between flex flex-row  py-2")}>
        <Text style={tailwind("text-xl pl-3")}>Date</Text>
        <Text style={tailwind("text-xl pr-3")}>State</Text>
      </View>
      <ScrollView style={tailwind("h-4/6")}>
        {
        data.map((item) =>(
          <View style={tailwind("justify-between flex flex-row pb-2")} key={item.LID}>
            <Text style={tailwind("text-lg pl-3 text-slate-400")}>{item.time}</Text>
            <Text style={tailwind("text-lg pr-3 text-slate-400")}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
}

export default DetectionBox;
