import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  DashboardScreen,
  DetectionScreen,
  DeviceScreen,
  ModeScreen,
  SercurityScreen,
} from "../screens";
import { BlurView } from "react-native";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
        headerStyle: {
          backgroundColor: "transparent", // Set the background color of the header
        },
        headerTitleStyle: {
          fontWeight: "bold", // Set the font weight of the header title
          color: "green", // Set the color of the header title
        },

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Dashboard") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Mode") {
            iconName = focused ? "speedometer" : "speedometer-outline";
          } else if (route.name === "Detection") {
            iconName = focused ? "bug" : "bug-outline";
          } else if (route.name === "Sercurity") {
            iconName = focused ? "business-sharp" : "business-outline";
          } else if (route.name === "Devices") {
            iconName = focused ? "ios-settings" : "ios-settings-outline";
          }

          // You can add more icons for other screens here
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      })}
    >
      {/* Add screens here */}
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Devices" component={DeviceScreen} />
      <Tab.Screen name="Mode" component={ModeScreen} />
      <Tab.Screen name="Detection" component={DetectionScreen} />
      <Tab.Screen name="Sercurity" component={SercurityScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
