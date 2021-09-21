import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button(props) {
  return (
    (
      <TouchableOpacity onPress={props.onClick}>
        <Text style={styles.bouton}>{props.name}</Text>
      </TouchableOpacity>
    ),
    (
      <TouchableOpacity onPress={props.onClick}>
        <Text style={styles.bouton}>{props.name}</Text>
      </TouchableOpacity>
    )
  );
}

const styles = StyleSheet.create({
  bouton: {
    backgroundColor: "#093357",
    padding: 8,
    margin: 5,
    width: "50%",
    color: "#bbb",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
