import { StyleSheet, View, Text, TextInput  } from "react-native";

const RegistrationScreen = () => {
    
    return (
        <View style={styles.container}>
            <Text>Registration</Text>
            <TextInput />
            <TextInput />
            <TextInput />
        </View>
    );
};

export default RegistrationScreen;

// ------------------------------------- | STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});