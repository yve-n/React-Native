import { View, Text, StyleSheet, Image, Button} from 'react-native';
import { useEffect, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';



const HomeScreen = (props) =>{
    const navigateToCountries = () => {
        //console.log(props);
        props.navigation.navigate("CountriesScreen");
    }

    const [user, setUser] = useState({});
    useEffect(() => {
        //recuperation des données user via le asynstorage
        useAsyncStorage('userDetails').getItem()
        .then(userDetails=>{
            // console.log('user', userDetails)
            setUser(JSON.parse(userDetails))
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])
    return(
        <View style={styles.container}>
            <Image style={styles.userPicture} source={{uri:user.picture}}></Image>
            <Text style={{color:"white",fontFamily:"architech", fontSize:20}}>
                Welcome {user.firstName} {user.LastName} !
            </Text>
            <Text style={styles.text}>You're logged in with email : {user.email}</Text>
            <Button title='see countries' onPress={() => {
                navigateToCountries()
            }}/>

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
        color:'white',
        fontSize:20,
        textAlign:'center',
        marginTop:10,
        fontFamily: "supermercado",
    },
    userPicture:{
        width:100,
        height:100,
        marginBottom:15,
        borderRadius:50

    },
})

export default HomeScreen;