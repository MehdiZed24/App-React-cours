import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default function Input(props) {
  return (
    <View>
    <TextInput
      onChangeText={(text) => props.onChange(text)}
      placeholder={props.name}
      placeholderTextColor="#FFF"
      secureTextEtry={props.isPassword}
      style={styles.input}
    />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#272727",
    borderWidth: 1,
    padding: 8,
    margin: 2,
    width: "90%",
    color: "#bbb",
    borderRadius: 5,
    borderColor: "white",
  },
});
