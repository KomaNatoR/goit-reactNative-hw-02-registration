import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from "react-native";

const RegistrationScreen = ({isShowKeyboard,setIsShowKeyboard}) => {
  // const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  return (
    <View style={{ ...styles.container, marginBottom: isShowKeyboard ? -160 : 0 }}>
      {/* // <View style={styles.container}> */}
      {!isShowKeyboard&&<Text style={styles.title}>Registration</Text>}
    

        <View style={styles.form}>
          <View>
            <TextInput style={styles.input} onFocus={()=>setIsShowKeyboard(true)} placeholder="Login" />
          </View>
          <View>
            <TextInput style={styles.input} onFocus={()=>setIsShowKeyboard(true)} placeholder="Mail" />
          </View>
          <View>
            <TextInput style={styles.input} onFocus={()=>setIsShowKeyboard(true)} placeholder="Password" secureTextEntry={true} />
          </View>
        </View>   


      <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
        <Text style={{color:"#ffffff"}}>Sign in</Text>
      </TouchableOpacity>
      <Text style={{color:"#1B4371", textAlign:"center"}}>Log in</Text>
    </View>
  );
};

export default RegistrationScreen;

// ------------------------------------- | STYLES
const styles = StyleSheet.create({
  container: {
    // flex: 0.7,
    // flexDirection:"column",
    // alignItems:"center",
    justifyContent: "flex-end",
    // position: 'absolute',
    // left: 0,
    // top: 222,
    width: "100%",
    // height: 220,
    paddingHorizontal: 16,
    // marginBottom:-80,
    paddingBottom:45,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginTop: 90,
    marginBottom: 32,
    
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
  btn: {
    justifyContent: "center",
    alignItems:"center",
    height: 50,
    marginTop: 44,
    marginBottom:16,
    color:"#ffffff",
    backgroundColor: "#ff6c00",
    borderRadius:100,
  },
});