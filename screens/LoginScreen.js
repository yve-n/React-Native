import { View, Text, StyleSheet} from 'react-native';


const LoginScreen = (props) =>{
    // console.log(props)
    return(
        <View style={styles.container}>
            <Text style={{color:"white"}}>Login screen</Text>
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

export default LoginScreen;