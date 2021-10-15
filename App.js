import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from "react";
import Home from './screens/Home';
import Objectifs from './screens/Objectifs';
import ModuleDetails from './screens/ModuleDetails';
import ObjectifDetails from './screens/ObjectifDetails';
import { Provider } from 'react-redux';
import store from "./store/configureStore";
import LoginForm from './components/loginForm';
import Settings from './screens/Settings';
import Offres from './screens/Offres';

const Stack = createStackNavigator();
function App() {
    return (
        <Provider store={store.store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Connexion">
                <Stack.Screen name="Connexion" component={LoginForm} options={{ headerShown: false }} />
                <Stack.Screen name="Accueil" component={Home}/>
                <Stack.Screen name="Objectifs" component={Objectifs}/>
                <Stack.Screen name="ModuleDetails" component={ModuleDetails}/>
                <Stack.Screen name="ObjectifDetails" component={ObjectifDetails}/>
                <Stack.Screen name="Settings" component={Settings}/>
                <Stack.Screen name="Offres" component={Offres}/>
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
}

export default App; 

