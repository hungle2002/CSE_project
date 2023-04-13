import React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/component/TabNavigator";
function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}
export default App;
