import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Modal, SafeAreaView, Alert, Image } from 'react-native';
import { Provider, connect } from 'react-redux';
const windowHeight = Dimensions.get('window').height;



function header(props) {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={{ position: "absolute", left: "50%", transform: [{ translateX: -30 }] }} onPress={() => props.navigation.navigate('Accueil')}>
                <Image style={styles.image} source={require("../assets/logo.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnObjectifs} onPress={() => props.navigation.navigate('Objectifs')}>
                <Text style={{ fontSize: 22 }}>{props.data.login.data.objectifs.filter(objectif => objectif.isDone == true).length}</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = state => ({
    data: state,
});

export default connect(mapStateToProps)(header);


const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        position:"relative",
        height:100
    },
    image: {
        width: 100,
        height: 100,
    },
    btnObjectifs: {
        borderWidth: 3,
        borderColor: "#f1c232",
        borderRadius: 500,
        width: 38,
        height: 38,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
    },

});