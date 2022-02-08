import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white',fontWeight:'bold'}}>2i-Tech-Paris-2</Text>
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
  // text:{
  //   color: 'white',
  //   fontWeight:'bold',

  // }
})


