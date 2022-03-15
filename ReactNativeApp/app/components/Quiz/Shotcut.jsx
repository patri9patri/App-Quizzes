import React from "react";
import { TouchableHighlight, Text, StyleSheet, View, Image } from 'react-native';

export default function ShortCut(props){

    function clickBoton(num){
        props.setCurrentQuiz(num);
        props.setNum(10);
    }
    return(
    <View style={styles.horizontal}>
        <TouchableHighlight onPress={()=>{clickBoton(0)}} style={styles.button_row}><Text style={styles.texto}>1</Text></TouchableHighlight>
        <TouchableHighlight onPress={()=>{clickBoton(1)}} style={styles.button_row}><Text style={styles.texto}>2</Text></TouchableHighlight>
        <TouchableHighlight onPress={()=>{clickBoton(2)}} style={styles.button_row}><Text style={styles.texto}>3</Text></TouchableHighlight>
        <TouchableHighlight onPress={()=>{clickBoton(3)}} style={styles.button_row}><Text style={styles.texto}>4</Text></TouchableHighlight>
        <TouchableHighlight onPress={()=>{clickBoton(4)}} style={styles.button_row}><Text style={styles.texto}>5</Text></TouchableHighlight>
        <TouchableHighlight onPress={()=>{clickBoton(5)}} style={styles.button_row}><Text style={styles.texto}>6</Text></TouchableHighlight>
        <TouchableHighlight onPress={()=>{clickBoton(6)}} style={styles.button_row}><Text style={styles.texto}>7</Text></TouchableHighlight>
        <TouchableHighlight onPress={()=>{clickBoton(7)}} style={styles.button_row}><Text style={styles.texto}>8</Text></TouchableHighlight>
        <TouchableHighlight onPress={()=>{clickBoton(8)}} style={styles.button_row}><Text style={styles.texto}>9</Text></TouchableHighlight>
        <TouchableHighlight onPress={()=>{clickBoton(9)}} style={styles.button_row}><Text style={styles.texto}>10</Text></TouchableHighlight>
    </View>
        
    );
}

const styles = StyleSheet.create({
    button_row: {
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: 'blue',
        textAlign: "center",
        alignSelf: "center",
        marginTop: 50,
        marginLeft: 2


    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: "center",

    },
    texto:{
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        marginTop: 5,
        textAlign: "center",
    }
  });