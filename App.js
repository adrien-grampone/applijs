import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from "react";
import Home from './screens/Home';
import Objectifs from './screens/Objectifs';
import {
    StyleSheet,
    Image,
    Text,
} from "react-native";
/*import { Provider } from 'react-redux';
import store from "./store/configureStore";*/
import LoginForm from './components/loginForm';



const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Connexion">
                <Stack.Screen name="Connexion" component={LoginForm} options={{ headerShown: false }} />
                <Stack.Screen name="Accueil" component={Home}/>
                <Stack.Screen name="Objectifs" component={Objectifs}/>
        {/*<Stack.Screen name="MonCompte" component={MonCompte} options={{
            title: 'Mon compte',
            headerStyle: {
              backgroundColor: variablesGlobales.noir,
              borderWidth: 0,
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              },
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          <Stack.Screen name="Produits" component={Produits} options={{
            title: 'Produits',
            headerStyle: {
              backgroundColor: variablesGlobales.noir,
              borderWidth: 0,
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              },
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
          <Stack.Screen name="Chat" component={Chat} options={{
            title: 'Chat',
            headerStyle: {
              backgroundColor: variablesGlobales.noir,
              borderWidth: 0,
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              },
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        
         <Stack.Screen name="VisiteDetails" component={VisiteDetails} options={{
           title: 'Détails de ma visite',
            headerStyle: {
              backgroundColor: variablesGlobales.noir,
              borderWidth: 0,
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              },
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
         <Stack.Screen name="ObjectifDetails" component={ObjectifDetails} options={{
           title: 'Détails de mon objectif',
            headerStyle: {
              backgroundColor: variablesGlobales.noir,
              borderWidth: 0,
              shadowRadius: 0,
              shadowOffset: {
                height: 0,
              },
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

/*
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}*/

export default App;
