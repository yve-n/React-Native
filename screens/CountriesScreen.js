import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import {View, ScrollView ,FlatList, Text, Image, StyleSheet, Button} from 'react-native';
import axios from 'axios';

const CountriesScreen = () =>{
    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        //appel api pour recuperer la liste des pays
        axios.get("https://restcountries.com/v3.1/all")
        .then(response=>{
            console.log("countries============ : ",response.data[0])
            const countries = response.data.map(country=>{
                return{
                    commonName:country.name.common,
                    frenchName: country.translations.fra.official ,
                    region: country.region,
                    flag: country.flags.png,
                    population: country.population,
                    capital: country.capital ? country.capital[0] : "undefined",
                    carSide: country.side === 'right'? "à droite" : "à gauche",
                    id:country.altSpellings[0],
                }
            })
            setCountries(countries);
        })
        .catch(error=>{
            console.log(error)
        })

    },[])

    return(
        
        <View style={styles.container}>
            <Text style={styles.title}>Country Screen</Text>
            
            <FlatList  data ={countries} 
                renderItem={country=>
                    <View style={styles.countryItem}>
                        <Image style={styles.flag} source={{uri : country.item.flag}}></Image>
                        <Text style={styles.itemInfo}>Nom commun : {country.item.commonName}</Text>
                        <Text style={styles.itemInfo}>Nom Français : {country.item.frenchName}</Text>
                        <Text style={styles.itemInfo}>Region : {country.item.region}</Text>
                        <Text style={styles.itemInfo}>Nombre d'habitants : {country.item.population}</Text>
                        <Text style={styles.itemInfo}>capital : {country.item.capital}</Text>
                        <Text style={styles.itemInfo}>style de conduite : {country.item.carSide}</Text>
                    </View>
                }
                keyExtractor={country=>country.id}
            />
            <StatusBar style="auto"/>
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
    flag:{
        width:100,
        height:100,
        marginBottom:10,
        borderWidth:1,
        borderColor:'#fff',
    },
    title:{
        color: 'white',
        fontFamily: "supermercado", 
        fontSize: 25,
        marginBottom:10,
        marginTop:15,
        padding:10,
    },
    countryItem:{
        marginTop:15,
        justifyContent: 'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:'white',
        padding:5,
    }, 
    itemInfo:{
        color: 'white',
        fontFamily: "architech", 
        fontSize: 10,
        marginBottom:5,
        marginTop:2,
        textAlign:'center',
    }

})
export default CountriesScreen;