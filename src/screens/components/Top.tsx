import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import {loadTop} from "../../services/loadData";
import logo from "../../assets/logo.png";

class Top extends React.Component {
    updateTop(){
        const back = loadTop();
        console.log(back);
    }

    componentDidCatch() {
        this.updateTop();
        
    }
    render() {
        return <View style={styles.top}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.welcome}>Olá Henrique</Text>
            <Text style={styles.capition}>Encontre os melhores produtores</Text>
        </View>
    }
}

export default Top;

const styles = StyleSheet.create({
    top:{
        backgroundColor: 'F6F6F6',
        padding: 16,
    },
    image:{
        width: 70,
        height: 30,
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    capition: {
        fontSize: 16,
        lineHeight: 26,
    },
    
})