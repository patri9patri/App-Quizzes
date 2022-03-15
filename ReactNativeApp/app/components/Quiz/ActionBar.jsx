import React from "react";
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';
export default function ActionBar(props){

    function guardaIntroducida(){
        let array_aux = ["-","-","-","-","-","-","-","-","-","-"];
        array_aux = props.resp;
        array_aux[props.currentQuiz] = props.str;
        props.setResp(array_aux);
       
    }

    function anteriorQuiz(){
        guardaIntroducida()
        props.anterior();
        props.setNum(10);
    }
    function siguienteQuiz(){
        guardaIntroducida()
        props.siguiente();
        props.setNum(10);
    }
    function enviarQuiz(){
        guardaIntroducida()
        props.comprobarRespuesta();
        props.setNum(10);
    }
    function reseteoQuiz(){
        guardaIntroducida()
        props.reseteo();
        props.setNum(10);
    }
    return(
        <View style={styles.row}>
            <TouchableHighlight onPress={reseteoQuiz} style={styles.boton}>{<Text style={styles.texto}>Reset</Text>}</TouchableHighlight>
            <TouchableHighlight onPress={anteriorQuiz} style={styles.boton}>{<Text style={styles.texto}>Anterior</Text>}</TouchableHighlight>
            <TouchableHighlight onPress={siguienteQuiz} style={styles.boton}>{<Text style={styles.texto}>Siguiente</Text>}</TouchableHighlight>
            <TouchableHighlight onPress={enviarQuiz} style={styles.boton}>{<Text style={styles.texto}>Terminar</Text>}</TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    boton: {
        justifyContent: 'space-between',
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 3,
        backgroundColor: "#61dafb",
        color: 'blue',
        textAlign: "center",
        fontSize: 30,
        alignSelf: "center",
        marginTop: 30,
        marginLeft: 6
      },
      row:{
        flexDirection: 'row',
        alignSelf: "center",
      },
      texto:{
        fontSize: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
        marginTop: 5,
      }
  });