import { Text, View, Switch, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";
import Voice from "@react-native-voice/voice";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBuildingShield } from "@fortawesome/free-solid-svg-icons";
import DetectionBox from "../component/DetectionBox";
import { create } from "../apiServices/searchService";
function StatisticScreen() {
  return (
    <View>
      <Text>StatisticScreen</Text>
    </View>
  );
}

export default StatisticScreen;
