import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Keyboard, View, TouchableWithoutFeedback } from 'react-native';

import RegistrationScreen from './Screen/RegistrationScreen';

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    
  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <ImageBackground style={styles.backIm} source={require("./Screen/img/IMG_20230216_165649.jpg")}>
          <RegistrationScreen isShowKeyboard={isShowKeyboard} setIsShowKeyboard={setIsShowKeyboard} />
        </ImageBackground>
      </TouchableWithoutFeedback>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backIm: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: "flex-end",
  },
});
