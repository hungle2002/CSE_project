import React, { useEffect, useRef } from "react";
import { View, Text, Animated, FadeIn } from "react-native";

export default FadeIn = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Set initial opacity to 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1, // Set the final opacity to 1
      duration: 1000, // Set the duration of the animation in milliseconds
      useNativeDriver: true, // Set useNativeDriver to true for better performance
    }).start();
  }, [fadeAnim]);

  return (
    <View>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text>Fading in...</Text>
      </Animated.View>
    </View>
  );
};
