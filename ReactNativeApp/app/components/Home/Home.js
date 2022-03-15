import React from 'react';
import {Text,StyleSheet, View, TouchableHighlight } from 'react-native';


export default function Home({navigation}) {
  
  
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.handwritten}>
        Bienvenido a nuestra página de juegos. Puedes jugar al tres en raya y
        hacer un pequeño test de 10 preguntas. Hecho por Patricia Alonso del
        Real y Javier García Céspedes."        
      </Text>
      <Text></Text>
      <Text style={styles.handwritten}>
      Pulse cualquiera de los botones para jugar a los juegos que se indican.
      </Text>
      <View style={styles.row}> 
        <TouchableHighlight
          style={styles.botones}
          onPress={() => {
            navigation.navigate("Quiz");
          }}
        >
          <Text style={styles.texto}>Quiz</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.botones}
          onPress={() => {
            navigation.navigate("TicTacToe");
          }}
        >
          <Text style={styles.texto}>TicTacToe</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  handwritten: {
    color: 'black',
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 60
  },
  row:{
    flexDirection: 'row',

  }, 
  botones:{
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 3,
    backgroundColor: "#61dafb",
    color: 'blue',
    textAlign: "center",
    fontSize: 15,
    alignSelf: "center",
    marginTop: 30,
    marginLeft: 75,

  },
  texto:{
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
  }, 
  title:{
    color:"red",
    fontSize: 30,
    marginLeft: 10,
    marginBottom: 8,
    marginTop: 4,
  }


});