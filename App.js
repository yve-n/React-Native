import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import * as Font from 'expo-font';
// const Stack = createStackNavigator();
// console.log('Stack : ', Stack);

const {Navigator, Screen } = createStackNavigator();
const App = () =>{
    //gestion des polices 
    useEffect(()=>{
        loadRessources();
    },[]);
    const loadRessources = async () =>{
        try {
            await Font.loadAsync({
                "supermercado": require("./assets/Fonts/ArchitectsDaughter-Regular.ttf"),
                "architech": require("./assets/Fonts/ArchitectsDaughter-Regular.ttf")
            })
        } catch (error) {
            console.log("erreur lors du chargement des ploices", error)
        }
    }
    return(
        <NavigationContainer>
            <Navigator screenOptions={{
                //style general de la navigation
                headerStyle:{
                    backgroundColor:"#34495e",
                },
                headerTintColor:"white",
                headerTitleAlign:"center",
                headerTitleStyle:{
                    fontSize:20,
                    fontWeight:'bold',
                },
            }}>
                <Screen name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                    title:"Welcome"
                }}
                />
                 <Screen name="LoginScreen"
                component={LoginScreen}
                options={{
                    //style specifique à chaque screen
                        headerLeft:false,
                        title:"connection",
                        headerStyle:{
                            backgroundColor:"grey",
                        },
                }}
                
                />
                <Screen name="HomeScreen"
                component={HomeScreen}
                options={{
                    title:"Home",
                    // headerShown:false,
                }}
                />
            </Navigator>

        </NavigationContainer>
    )
}
export default App;