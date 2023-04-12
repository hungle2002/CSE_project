import React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/component/TabNavigator";
import DefaultLayout from "./src/layouts";
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
