import { useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TouchableOpacity, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';

//popup => assurer que l'authentification a été effectuée correctement
   WebBrowser.maybeCompleteAuthSession();

const LoginScreen = (props) =>{

    //recuperer les id clients en fontion des système
    
        const [request, response, promptAsync] = 
           Google.useAuthRequest({
                    expoClientId:"3767034604-hr2nbhcdf7g8s8boptffmd3233mc3ala.apps.googleusercontent.com",
                    iosClientId:'',
                    androidClientId:'',
                    webClientId:"3767034604-hr2nbhcdf7g8s8boptffmd3233mc3ala.apps.googleusercontent.com",
            });

            useEffect(() => {
                if(response?.type === 'success'){
                    const {authentication} = response;
                    const accessToken = authentication.accessToken;
                    // console.log("access token", accessToken);
                    axios.get('https://www.googleapis.com/oauth2/v3/userinfo?access_token=' + accessToken)
                        .then(response=>{
                            console.log("ma reponse:" , response)
                            const userDetails = response.data;
                            console.log("details", userDetails);
                            const {given_name, family_name,email,picture} =userDetails;
                            props.navigation.navigate("HomeScreen",{
                                firstName : given_name,
                                LastName : family_name,
                                email : email,
                                picture:picture,
                            });
                        })
                        .catch(error=>{
                            console.log(error)
                        })
                }
            }, [response])

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
            <Button title='Login with Google'  
             onPress={() => {
                 promptAsync();                  
            }} disabled={!request}
            />
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
        marginBottom:20,
    },
    
})

export default LoginScreen;