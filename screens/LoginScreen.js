import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';


const LoginScreen = (props) =>{

    const navigateToHome = () =>{
        props.navigation.navigate("HomeScreen", {
            firstName:props.route.params.firstName,
            LastName:props.route.params.LastName,
            age:props.route.params.age,
        });
    }
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Login screen</Text>
            <TouchableOpacity onPress={navigateToHome}>
                <View style={styles.button}>
                    <Text style={{fontSize:15,
                    fontWeight:'bold',padding:10}}>Go To Home</Text>
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
      text:{
        color:"white",
        fontSize:20, 
        fontWeight:'bold',
        borderWidth:2,
        borderColor:'aqua',
        padding:10,
        borderRadius:5,
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

export default LoginScreen;