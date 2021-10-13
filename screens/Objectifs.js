import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
    SafeAreaView,
    Dimensions
} from "react-native";
import { Icon } from 'react-native-elements'
//import { Provider, connect } from 'react-redux';
//import userInfos from './functionUserInfos';
const windowHeight = Dimensions.get('window').height;



function Objectifs(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image style={styles.image} source={require("../assets/logo.png")} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Objectifs;


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
});
