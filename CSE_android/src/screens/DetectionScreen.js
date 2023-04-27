import { Text, View, ScrollView, RefreshControl } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useState, useCallback } from "react";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function DetectionScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const tailwind = useTailwind();

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await delay(2000);
    console.log("Refresh hehe");

    setRefreshing(false);
  }, []);

  return (
    <View style={tailwind("flex-1")}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>This is Check page hehe!</Text>
      </ScrollView>
    </View>
  );
}

export default DetectionScreen;
