import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput,
    ScrollView, Image, Button,TouchableOpacity } from 'react-native';
import axios from 'axios';

const CountriesScreen = (props) => {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [CountriesFilter, setFilterCountries]=useState([]);

    useEffect(() => {
        //Appel API pour récupérer la liste des pays
        handleRegionSelection('all')
        //  setFilterCountries(countries);
        //  setCountries(countries);
    }, [])

    const NavigateToCountriesDetails = (countryName)=>{
        //navigation vers la country details screen
        props.navigation.navigate("CountryDetailsScreen",{
            countryName
        });
    }

    const handleRegionSelection = (region) => {
        let param = ``;
        if(region === "all")
            param = region
        else
            param = `region/${region}`;
        setLoading(true);
        axios.get("https://restcountries.com/v3.1/" + param)
            .then(response => {
                //console.log("Rest countries response => ", response.data[0])
                const countries = response.data.map(country => {
                    return {
                        commonName: country.name.common,
                        frenchName: country.translations.fra.official,
                        region: country.region,
                        flag: country.flags.png,
                        population: country.population,
                        capital: country.capital ? country.capital[0] : "Non défini",
                        carSide: country.side === "right" ? "à droite" : "à gauche",
                        id: country.altSpellings[0]
                    }
                })
                setCountries(countries);
                setCurrentPage(1);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
            })
    }

    let pagination = [];
    let countriesList =[];
    if(countries) {
        let end = countries.length / 10;
        if(countries.length % 10 !== 0)
            end++;
        for (let i=1; i<= end; i++) {
            pagination.push(
                <TouchableOpacity key={i} style={styles.touch} onPress={() => setCurrentPage(i)}>
                    <Text style={styles.pageButton}>{i}</Text>
                </TouchableOpacity>
            )
        }
        const beginList = (currentPage - 1) * 10;
        const endList = currentPage * 10;
        countriesList = countries.slice(beginList, endList);
    }
    //implementation d'une search bar pour filtrer les pays
    const renderHeader = ()=>{
        return(
            <TextInput style={styles.search} placeholder="rechercher un pays"
            value={search}
            onChangeText={pattern=>filterCountries(pattern)}
            />
        )
    }
    const filterCountries =(pattern) =>{
        if(pattern){
            setLoading(true);
            const newCountriesList =countries.filter(country=>{
                const countryInfo = `${country.commonName.toLowerCase()} 
                ${country.frenchName.toLowerCase()} `;
                const research = pattern.toLowerCase();
                return countryInfo.indexOf(research) > -1;
            })
            setFilterCountries(newCountriesList);
            setSearch(pattern);
            setCurrentPage(1);
            setLoading(false);
        }else{
            setFilterCountries(countriesList);
            setSearch(pattern);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Countries</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => handleRegionSelection('all')}><Text style={styles.regionButton}>ALL</Text></TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => handleRegionSelection('Africa')}><Text style={styles.regionButton}>Afrique</Text></TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => handleRegionSelection('Americas')}><Text style={styles.regionButton}>Amériques</Text></TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => handleRegionSelection('Asia')}><Text style={styles.regionButton}>Asie</Text></TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => handleRegionSelection('Europe')}><Text style={styles.regionButton}>Europe</Text></TouchableOpacity>
                <TouchableOpacity style={styles.touch} onPress={() => handleRegionSelection('Oceania')}><Text style={styles.regionButton}>Océanie</Text></TouchableOpacity>
            </View>
            {
                loading && <View>
                    <Text style={styles.title}>Loading.....</Text>
                </View>
            }
            <Text style={styles.title}>Nombre de pays : {countries.length}</Text>
            <View style={styles.buttonContainer}>{pagination}</View>
            
            <FlatList 
                // data={CountriesFilter}
                data={countriesList}
                renderItem={country => 
                    <View style={styles.countryItem}>
                        <Image style={styles.flag} source={{uri: country.item.flag}} />
                        <View style={styles.containerInfos}>
                            <Text style={styles.itemInfo}>Nom commun : {country.item.commonName}</Text>
                            <Text style={styles.itemInfo}>Nom français : {country.item.frenchName}</Text>
                            <Text style={styles.itemInfo}>Région : {country.item.region}</Text>
                            <Text style={styles.itemInfo}>Capitale : {country.item.capital}</Text>
                            <Text style={styles.itemInfo}>Style de conduite : {country.item.carSide}</Text>
                            <TouchableOpacity onPress={() => NavigateToCountriesDetails(country.item.commonName)}>
                                <Text style={styles.regionButton}> See Details</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                }
                keyExtractor={country => country.id}
                ListHeaderComponent ={()=>renderHeader()}
            />
            
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
    pageButton:{
        alignSelf: 'flex-start',
        width: 'auto',
        // backgroundColor: "aqua",
        color: "white",
        fontSize: 17,
        // marginHorizontal: 3,    
    },
    touch:{
        padding:5,
        lineHeight:10,
        borderRadius:6,
        borderColor: 'white',
        borderWidth:2,
        marginHorizontal:3,
        marginVertical:3,
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
        width: 100,
        height: 50,
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
    search:{
        borderColor:'white',
        borderWidth:1,
        textAlign:'center',
        borderRadius:10,
        backgroundColor: 'grey',


    }

})

export default CountriesScreen;