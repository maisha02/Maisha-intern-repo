import React, { useState, useCallback, memo } from 'react';
import { View, Text, Button } from 'react-native';

const ChildButton = memo(({ onPress }) => {
  console.log('Child rendered');
  return <Button title="Press child button" onPress={onPress} />;
});

export default function PerformanceExample() {
  const [count, setCount] = useState(0);

  const handlePress = useCallback(() => {
    console.log('Child button pressed');
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <ChildButton onPress={handlePress} />
    </View>
  );
}