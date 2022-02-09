import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Image, StyleSheet, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
// const Stack = createStackNavigator();
// console.log('Stack : ', Stack);

const {Navigator, Screen } = createStackNavigator();
const App = () =>{
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name="WelcomeScreen"
                component={WelcomeScreen}
                />
            </Navigator>

        </NavigationContainer>
    )
}
export default App;