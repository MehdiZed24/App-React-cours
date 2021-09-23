import React from 'react';
import { StyleSheet, TextInput } from 'react-native';


export default function Input(props) {
    return(
        <TextInput 
        onChangeText={(text) => props.onChange(text)}
        style={styles.input}
        placeholder={props.name}
        secureTextEntry={props.isPassword}
        placeholderTextColor='#FFF'
        valeur={props.valeur}
        onBlur={props.onBlur}
        />
    )
}

const styles = StyleSheet.create({
    input: {
      backgroundColor:"#272727",
      borderWidth:1,
      padding:8,
      margin:10,
      width:"90%",
      color: '#bbb',
      borderRadius:5,
      borderColor:"white",
    },
  });
  