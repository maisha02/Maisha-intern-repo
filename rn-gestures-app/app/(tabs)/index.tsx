import { View, Text } from 'react-native';
import { useEffect, useState } from 'react';

export default function HomeScreen() {
  const [title, setTitle] = useState("Loading...");

  useEffect(() => {
    console.log('App is running');

    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((data) => {
        console.log('API response:', data);
        setTitle(data.title);
      })
      .catch((err) => {
        console.log('API error:', err);
      });
  }, []);

  return (
    <View style={{ padding: 70 }}>
      <Text>Debug Test Screen</Text>
    </View>
  );
}