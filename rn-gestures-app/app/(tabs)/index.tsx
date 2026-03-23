import { View, Text, FlatList, StyleSheet } from 'react-native';

const items = ['Apple', 'Banana', 'Orange'];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fruit List</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
  item: {
    color: 'lightgray',
    fontSize: 18,
    marginVertical: 4,
  },
});