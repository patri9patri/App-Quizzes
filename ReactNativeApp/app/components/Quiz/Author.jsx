import React from "react";
import { TouchableHighlight, Text, StyleSheet, View, Image } from 'react-native';

export default function Author(props){

    function compruebaImagen(){
        let porPantalla;
        if(props.author.photo.url===null || props.author.photo.filename === null || props.author.photo.mime === null){
            porPantalla = <Text style={styles.no_img}>?</Text>
        }else{
            // eslint-disable-next-line jsx-a11y/alt-text
            porPantalla = <View><Image source={{uri: props.author.photo.url}} style={styles.author_img}></Image></View>
        }
        return porPantalla;
        
    }
    function compruebaUsername(){
        let porPantalla;
            if(props.author.username !==null){
                porPantalla = <Text style={styles.username_style}>{props.author.username}</Text>
            }
            else if(props.author.username === null && props.author.profileName !== null){
                porPantalla = <Text style={styles.username_style}>{props.author.profileName}</Text>
            } else{
                porPantalla = <Text style={styles.username_style}>Anónimo</Text>
            }

            return porPantalla;

        }
        
        return(
        
            <View>
                {compruebaImagen()}
                {compruebaUsername()}
            </View>
            
        );

    }

const styles = StyleSheet.create({
    no_img: {
        fontFamily: "Cochin",
        fontSize: 100,
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: 100


    },
    username_style: {
        fontFamily: "Cochin",
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: "center",

      },
      author_img: {
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 10,
        borderWidth: 4,
        borderColor: "green",
        alignSelf: "center",
        marginTop: 150

    },
  });