import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://example.com/users')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return (
    <View>
      {data.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
    </View>
  );
}