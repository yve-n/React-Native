import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';


const WelcomeScreen = (props) =>{
    // console.log(props);
 const navigateToLogin = () =>{
    props.navigation.navigate("LoginScreen", {
        firstName:'John',
        LastName:'Doe',
        age:23,
    });
 }
    return(
        <View style={styles.container}>
            <Text style={{color:"white", fontSize:20}}>Welcome screen</Text>
            <TouchableOpacity onPress={navigateToLogin}>
                <View style={styles.button}>
                    <Text style={{fontSize:15,
                    fontWeight:'bold',padding:10}}>Login</Text>
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
        marginTop:10,
        paddingHorizontal:10,
        borderColor:'#2980b9',
        borderRadius:5,
        
      },
})
export default WelcomeScreen;