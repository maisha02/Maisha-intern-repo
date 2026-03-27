import { View, Text, ActivityIndicator, Button } from 'react-native';
import { useEffect, useState } from 'react';
import api from '../api';

type Post = {
  title: string;
  body: string;
};

export default function HomeScreen() {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await api.get('/posts/1');
      setData(response.data);
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'black' }}>
      {loading && <ActivityIndicator size="large" />}
  
      {error !== '' && <Text style={{ color: 'white', marginBottom: 10 }}>{error}</Text>}
  
      {data && (
        <>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 10 }}>
            {data.title}
          </Text>
          <Text style={{ color: 'white', marginBottom: 20 }}>
            {data.body}
          </Text>
        </>
      )}
  
      <Button title="Reload" onPress={fetchData} />
    </View>
  );
      }