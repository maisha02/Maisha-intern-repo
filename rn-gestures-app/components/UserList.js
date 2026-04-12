import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function UserList() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://example.com/user")
      .then((res) => res.json())
      .then((data) => setUser(data.name));
  }, []);

  return (
    <View>
      <Text>{user ? user : "Loading..."}</Text>
    </View>
  );
}