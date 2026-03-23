import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: width > 400 ? 28 : 18 }]}>
        Responsive Styling
      </Text>
      <Text style={styles.subtitle}>
        Screen width: {width}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    color: 'yellow',
  },
});