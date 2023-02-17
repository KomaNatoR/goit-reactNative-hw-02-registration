import { StyleSheet, View, Text, TextInput  } from "react-native";

const RegistrationScreen = () => {
    
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Registration</Text>
        
          <View style={styles.form}>
            <View>
              <TextInput style={styles.input} placeholder="Login" />
            </View>
            <View>
              <TextInput style={styles.input} placeholder="Mail" />
            </View>
            <View>
              <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
            </View>
          </View>
        </View>
    );
};

export default RegistrationScreen;

// ------------------------------------- | STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:"center",
    position: 'absolute',
    left: 0,
    top: 263,
    width: "100%",
    height: 550,
    paddingHorizontal:16,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginTop: 90,
    marginBottom:32,
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing:0.01,
  },
  // =====================================|
  form: {

  },
  input: {
    height: 50,
    marginTop: 16,
    padding:16,
    backgroundColor: "#f6f6f6",
    borderWidth: 1,
    borderColor: "#e8e8e8",
    borderRadius:8,
  },
});