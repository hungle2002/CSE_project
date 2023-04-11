import React from "react";
import { useTailwind } from "tailwind-rn";
import { Image, ScrollView, Text } from "react-native";

const logo = {
  uri: "https://reactnative.dev/img/tiny_logo.png",
  width: 64,
  height: 64,
};

const Pizza = () => {
  const tailwind = useTailwind();

  return (
    <ScrollView>
      <Text style={tailwind("font-bold text-2xl")}>First thing</Text>
      <Text>First thing</Text>
    </ScrollView>
  );
};

export default Pizza;
