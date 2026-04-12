import { View, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

export default function HomeScreen() {
  const { t, i18n } = useTranslation();

 
  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('appLanguage');
      if (savedLanguage) {
        i18n.changeLanguage(savedLanguage);
      }
    };
    loadLanguage();
  }, []);


  const changeLang = async (lang: string) => {
    await AsyncStorage.setItem('appLanguage', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{t('welcome')}</Text>

      <Button title="English" onPress={() => changeLang('en')} />
      <Button title="Spanish" onPress={() => changeLang('es')} />
    </View>
  );
}