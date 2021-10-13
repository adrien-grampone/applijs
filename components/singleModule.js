import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Modal, SafeAreaView, Alert} from 'react-native';
import { Icon } from 'react-native-elements';
const windowHeight = Dimensions.get('window').height;



export default function SingleModule(props){
    return(
        <TouchableOpacity style={[styles.module, {borderWidth:1, borderRadius:15}, props.module.idTheme == 1 ? {borderColor:'#009e0f'} : props.module.idTheme == 2 ? {borderColor:"#2b78e4"} : {borderColor:"#ff9900"}]} //onPress={() => filterModules('commerce')}
        >
            <View style={{display:"flex", alignItems:"center",justifyContent:"center", width:"20%"}}>
                <Icon size={30} name={props.module.logo} type='font-awesome-5' color="#000" />
                </View>
            <View style={{width:"80%"}}>
                <Text style={{fontSize:18, fontWeight:"600"}}>{props.module.name}</Text>
                <Text style={{fontSize:13, marginTop:10}}>{props.module.excerpt}</Text>
            </View>
            
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    module:{
        padding:10,
        display:"flex", 
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        flexDirection:"row",
        paddingRight:10,
        paddingLeft:10,
        marginTop:20
    },
   
});