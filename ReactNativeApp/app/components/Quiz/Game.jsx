import React, { useState, useEffect } from 'react';
import { TouchableHighlight, Text, StyleSheet, View, TextInput, SegmentedControlIOSComponent } from 'react-native';

export default function Game(props){


    return(
        <View style={styles.game_style}>
            <Text style={styles.title}>
            {props.quizzes[props.currentQuiz].question}
            </Text>
            <TextInput style={styles.answer} type="text" placeholder="Introduce tu respuesta" value={props.str}  onChangeText={props.setStr}/>
        </View>
    );
}

const styles = StyleSheet.create({
    game_style: {
        fontFamily: "Cochin",
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: "center",
      },
      title: {
          marginTop:12,
          color: "red",
          fontWeight: "bold",
          fontFamily: 'SinhalaSangamMN',
          fontSize: 30,

      },
      answer:{
          fontSize:15,
          marginBottom:12,
      }

  });