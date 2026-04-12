import { View, Button } from 'react-native';
import * as Sentry from '@sentry/react-native';

export default function HomeScreen() {
  const triggerHandledError = () => {
    try {
      throw new Error('Test Sentry error from HomeScreen');
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  return (
    <View style={{ marginTop: 50, padding: 20 }}>
      <Button title="Trigger Sentry Error" onPress={triggerHandledError} />
    </View>
  );
}