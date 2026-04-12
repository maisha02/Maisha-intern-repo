import { Stack } from 'expo-router';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://35dc8d477a7ccac738d0b31b2ef1becb@o4511136914407424.ingest.us.sentry.io/4511136925483008',
  debug: true,
});

export default function RootLayout() {
  return <Stack />;
}