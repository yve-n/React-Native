import { View, Text, StyleSheet, Image} from 'react-native';
import { useEffect, useState } from 'react';


const HomeScreen = (props) =>{
    //  console.log(props.route.params.firstName)

    const [user, setUser] = useState({});
    useEffect(() => {
        //recuperation des données user via le asynstorage
        // useAsyncStorage('userDetails').getItem()
        // .then(userDetails=>{
        //     // console.log('user', userDetails)
        //     setUser(JSON.parse(userDetails))
        // })
        // .catch(error=>{
        //     console.log(error)
        // })
        //recuperation des données user via les props
        setUser(props.route.params)
        console.log(props.route.params);
    }, [])
    return(
        <View style={styles.container}>
            <Image style={styles.userPicture} source={{uri:user.picture}}></Image>
            <Text style={{color:"white",fontFamily:"architech", fontSize:20}}>
                Welcome {user.firstName} {user.LastName} !
            </Text>
            <Text style={styles.text}>You're logged in with email : {user.email}</Text>

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

    }
})

export default HomeScreen;