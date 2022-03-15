import React from "react";
import { TouchableHighlight, Text, StyleSheet, View, Image } from 'react-native';

export default function Attachment(props){

    function compruebaImagen(){
        let porPantalla;
        if(props.attachment!==null){
            porPantalla = <Image source={{uri: props.attachment.url}} style={styles.imagen}></Image>

        }else{
            porPantalla =  <Text style={styles.no_img}>?</Text>
        }
        return porPantalla;
        
    }

    return(
        
        <View>
           {compruebaImagen()}
        </View>
        
    );
}

const styles = StyleSheet.create({
    no_img: {
        fontFamily: "Cochin",
        fontSize: 300,
        alignSelf: "center",


      },
    imagen: {
        marginTop:30,
        width: 300,
        height: 200,
        alignSelf: "center",
        borderRadius: 3,


    }
  });