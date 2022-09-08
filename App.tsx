import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { Audio, InterruptionModeIOS, InterruptionModeAndroid } from 'expo-av'
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux';
import Main from './src';
import PlayerModal from './src/components/player-modal';
import AddPlaylistModal from './src/components/add-playlist-modal';

SplashScreen.preventAutoHideAsync();


export default function App() {
  const playInSilentMode = async () => {
    try {
      await Audio.setAudioModeAsync({ 
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        allowsRecordingIOS: false,
        interruptionModeIOS: InterruptionModeIOS.DoNotMix,
        shouldDuckAndroid: false,
        interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
        playThroughEarpieceAndroid: false,
      });
    } catch(e) {
      console.log('set play in silent mode error: ', e);
    }
  }

  playInSilentMode();

  return (
    <Provider store={store()}>
      <View style={styles.container}>
        <Main />
        <StatusBar style="auto" />
        <PlayerModal />
        <AddPlaylistModal />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
