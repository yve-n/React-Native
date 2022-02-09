import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';


const WelcomeScreen = (props) =>{
    // console.log(props);
 const navigateToLogin = () =>{
    //  console.log(props);
    props.navigation.navigate("LoginScreen");
 }
    return(
        <View style={styles.container}>
            <Text style={{color:"white", fontSize:20}}>Welcome screen</Text>
            <TouchableOpacity onPress={navigateToLogin}>
                <View style={styles.button}>
                    <Text>Login</Text>
                </View>
            </TouchableOpacity>
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
      button:{
        backgroundColor:'white',
        color:'black',
        borderWidth:2,
        paddingHorizontal:20,
        paddingVertical:10,
        marginTop:5,
        borderColor:'aqua',
        borderRadius:5,
        
      },
})
export default WelcomeScreen;