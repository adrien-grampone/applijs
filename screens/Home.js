import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
    SafeAreaView,
    Dimensions,
    ScrollView
} from "react-native";
//import { Provider, connect } from 'react-redux';
//import userInfos from './functionUserInfos';
import SingleTheme from "../components/singleTheme";
import SingleModule from '../components/singleModule';
const windowHeight = Dimensions.get('window').height;



function Home(props) {

    const [themes, setThemes] = useState([
        {
            id:1,
            name: "Commerce",
            color:"#009e0f"
        },
        {
            id:2,
            name: "Développement personnel",
            color:"#2b78e4"
        },
        {
            id:3,
            name: "Synergologie",
            color:"#ff9900"
        },
    ]);
    const [modules, setModules] = useState([
        {
            id:1,
            name: "Les 7 étapes de la vente",
            logo: "bars",
            excerpt:"La concentration et la gestion des émotions restent prépondérantes pour finir par la conclusion de la vente. Nous venons de traverser de façon détaillé...",
            idTheme: 1
        },
        {
            id:2,
            name: "L'écoute active",
            logo: "assistive-listening-systems",
            excerpt:"La concentration et la gestion des émotions restent prépondérantes pour finir par la conclusion de la vente. Nous venons de traverser de façon détaillé...",
            idTheme: 2,
        },
        {
            id:3,
            name: "La logique gestuelle",
            logo: "handshake",
            excerpt:"La concentration et la gestion des émotions restent prépondérantes pour finir par la conclusion de la vente. Nous venons de traverser de façon détaillé...",
            idTheme: 3,
        },
    ]);
    const [modulesFilter, setModulesFilter] = useState(modules);
    const[themeActive, setThemeActive] = useState();

    useEffect(() => {
        props.navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity style={styles.btnObjectifs} onPress={() => props.navigation.navigate('Objectifs')}>
                <Text style={{fontSize:22}}>2</Text>
            </TouchableOpacity>
          ),
        });
    }, [props.navigation]);

    const filterModules = (idTheme) => {
        if(themeActive == idTheme){
            setModulesFilter(modules);      
            setThemeActive();
        }
        else{
            setModulesFilter(modules.filter( i => i.id == idTheme ));      
            setThemeActive(idTheme);
        }
      
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Image style={styles.image} source={require("../assets/logo.png")} />
                </View>
                <View style={styles.filtres}>
                {   themes.map((item) => {
                        return (
                            <SingleTheme themeActive={themeActive} key={item.id} theme={item} filterModules={filterModules}></SingleTheme>
                        )
                    })
                }
                </View>
                <View style={styles.modules}>
                    <View style={{ width:"90%"}}>
                {   modulesFilter.map((item) => {
                        return (
                          <SingleModule key={item.id} module={item}></SingleModule>
                        )
                    })
                }
                </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:20,
        paddingRight:20
    },
    image:{
        width:100, 
        height:100,
    }, 
    btnObjectifs:{
        borderWidth:3,
        borderColor:"#f1c232",
        borderRadius:500,
        width:38,
        height:38,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginRight:15,
    },
    filtres:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        marginTop:10,
        padding:15
    },

    modules:{
        width:"100%",
        display:"flex",
        alignItems:"center",
    }
});
