import React from 'react';
import { View, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { Navigation } from '../../../types';
import Typography from '../../../components/typography';
import Button from '../../../components/button';
import styles from './styles';

const hideSplashScreen = async () => {
  await SplashScreen.hideAsync();
}

const Welcome: React.FC<Navigation> = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(hideSplashScreen, 500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Typography styles={styles.logo}>
          Artica 
        </Typography>
        <Typography styles={styles.logo2}>
          .
        </Typography>
      </View>
      
      <Button
        styles={styles.button}
        onPress={() => navigation.navigate('Signup')}
      >
        Signup
      </Button>
      <Button
        styles={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        Login
      </Button>
    </SafeAreaView>
  );
};

export default Welcome;
