import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

const Logo = require("./assets/images/m2i-logo.png");
const imgUrl ="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/256x256/4e12aef886065a104d78b6206528b6f4";
export default function App() {
  const [state, setState] = useState("");
  return (
    <View style={styles.container}>
      <Image 
      // source={Logo}
      source={{uri: imgUrl}}
      style={styles.imgLogo}
      />
      <Text style={styles.text}>2i-Tech-Paris-2</Text>
      <TextInput placeholder='Entrer votre texte' placeholderTextColor='#fff'
      value={state}
      onChangeText={value => setState(value)}
      style={styles.textInput}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:2,
    backgroundColor: 'black',
    borderColor:'red',
    borderWidth:2,
    justifyContent: 'center',
    alignItems:'center',
  },
  text:{
    color: 'white',
    fontWeight:'bold',
    padding:2, 
    marginBottom: 10

  },
   textInput:{
     width:250,
     height:30,
     borderWidth:1,
     borderColor:'#fff',
      color: '#fff',
      textAlign:'center',
      borderRadius:5,

  },
  imgLogo:{
    width:250,
    height:200,
    marginBottom:10,
  }

})


