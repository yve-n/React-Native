import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput,
    ScrollView, Image, Button,TouchableOpacity , Linking} from 'react-native';
import axios from 'axios';

const CountryDetailsScreen = (props) => {

    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //Appel API pour récupérer un pays 
        retrieveCountry(props.route.params.countryName)
       
    }, [])

    const retrieveCountry = (country) => {
        setLoading(true);
        axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
            .then(response => {
                console.log("Rest country response ======++++++> ", response.data[0])
                setCountry(response.data[0]);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
            })
    }
   

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Country</Text>
            {
                loading && <View>
                    <Text style={styles.title}>Loading.....</Text>
                </View>
            }
              {
                  !loading &&
            <View style={styles.countryItem}>
                <Image style={styles.flag} source={{uri: country.flags.png}} />
                <View style={styles.containerInfos}>
                    <Text style={styles.itemInfo}>Nom commun : {country.name.common}</Text>
                    <Text style={styles.itemInfo}>Nom français : {country.translations.fra.official}</Text>
                    <Text style={styles.itemInfo}>Continent : {country.continents[0]}</Text>
                    <Text style={styles.itemInfo}>Région : {country.region}</Text>
                    <Text style={styles.itemInfo}>Sous-Région : {country.subregion}</Text>

                    <Text style={styles.itemInfo}>Capitale : {country.capital ? country.capital[0] : "Non défini"}</Text>
                    <Text style={styles.itemInfo}>population : {country.population}</Text>
                    <Text style={styles.itemInfo}>StartOfWeek : {country.startOfWeek}</Text>
                    <Text style={styles.itemInfo}>Statut : {country.status}</Text>

                    <Text style={styles.itemInfo}>Style de conduite : {country.car.side === "right" ? "à droite" : "à gauche"}</Text>
                    <Text style={styles.itemInfo}>Pays membre de l'ONU : {country.unMember ? "Oui" : "Non"}</Text>
                    <Button title="Afficher Maps" onPress={() => Linking.openURL(country.maps.googleMaps)} />
                </View>
            </View>
              }
               
               
             
            
            <StatusBar style="auto" /> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontFamily: "supermercado",
        fontSize: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: "row",
        flexWrap: 'wrap',
       justifyContent: 'center',
       alignItems:'center',
       marginVertical:10,
    },
    regionButton: {
        alignSelf: 'flex-start',
        width: 'auto',
        // backgroundColor: "#34495e",
        color: "white",
        fontSize: 17,
        padding: 3,
        marginHorizontal: 3,

    },
    countryItem: {
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        flexDirection:'row',
        flexWrap:'wrap',
       justifyContent:'space-around',
    },
    flag: {
        width: 150,
        height: 100,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#fff"
    },
    itemInfo: {
        color: 'white',
        marginTop: 5,
        textAlign: 'center'
    },
    containerInfos:{
        flexDirection:'column',
    },

})

export default CountryDetailsScreen;