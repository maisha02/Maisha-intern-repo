import React, { useRef } from 'react';
import { View, Button, Animated } from 'react-native';

export default function HomeScreen() {
  const moveAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    moveAnim.setValue(0);

    Animated.timing(moveAnim, {
      toValue: 150,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          marginBottom: 20,
          transform: [{ translateX: moveAnim }],
        }}
      />

      <Button title="Start Animation" onPress={startAnimation} />
    </View>
  );
}