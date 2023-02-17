import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import RegistrationScreen from './Screen/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backIm} source={require("./Screen/img/IMG_20230216_165649.jpg")}>
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backIm: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
