import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function Message() {
  const [text, setText] = useState("Hello");

  return (
    <View>
      <Text>{text}</Text>
      <Button title="Click Me" onPress={() => setText("Button Clicked")} />
    </View>
  );
}