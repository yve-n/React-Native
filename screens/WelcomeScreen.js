import { View, Text, StyleSheet} from 'react-native';


const WelcomeScreen = () =>{
    return(
        <View style={styles.container}>
            <Text style={{color:"white"}}>Welcome screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems:'center',
      },
})
export default WelcomeScreen;