import { useEffect, useState } from "react";
import {View, FlatList, Text, Image, StyleSheet, Button} from 'react-native';

const CountriesScreen = () =>{
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        //appel api pour recuperer la liste des pays

    },[])

    return(
        <View style={styles.container}>
            <Text style={{color: 'white',fontFamily: "supermercado", fontSize: 20}}>Country Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
export default CountriesScreen;