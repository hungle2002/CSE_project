import React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import DefaultLayouts from "./src/layouts";
import DashboardScreen from "./src/screens/DashboardScreen";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Stack = createNativeStackNavigator();

function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <DefaultLayouts title="Dahsboard">
        <DashboardScreen />
      </DefaultLayouts>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
    </TailwindProvider>
  );
}
export default App;
