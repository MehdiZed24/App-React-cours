import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function Input(props) {
  console.log(props.isPassword)
  return (
    <View>
    <TextInput
      onChangeText={(text) => props.onChange(text)}
      placeholder={props.name}
      placeholderTextColor="#FFF"
      secureTextEntry={props.isPassword}
      style={styles.input}
    />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#272727",
    borderWidth: 1,
    padding: 3,
    margin: 1,
    width: "90%",
    color: "#bbb",
    borderRadius: 5,
    borderColor: "grey",
  },
});
