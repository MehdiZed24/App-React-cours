import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "./components/Button.js";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  // function onAdd() {
  //   setCount(count + 1);
  // }

  // function onSub() {
  //   setCount(count - 1);
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titre}>Bienvenue!</Text>
        <Text style={styles.text}>Se Connecter</Text>
      </View>

      {/*<Text style={styles.titre}>{count}</Text>
      <Button name="Ajouter" onClick={onAdd}/>
      <Button name="Soustraire" onClick={onSub} /> */}
      
      <TextInput
        placeholder="Email"
        placeholderTextColor="#bbb"
        style={styles.input}
      />
      <TextInput
        placeholder="Mot de passe"
        placeholderTextColor="#bbb"
        style={styles.input}
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  header: {
    borderRadius: 5,
    backgroundColor: "#093357",
    marginBottom: 25,
    width: "90%",
  },
  titre: {
    fontWeight: "bold",
    padding: 25,
    fontSize: 32,
    color: "#bbb",
    textAlign: "center",
  },
  text: {
    fontWeight: "bold",
    padding: 12,
    fontSize: 16,
    color: "#bbb",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#272727",
    borderWidth: 1,
    padding: 8,
    margin: 2,
    width: "90%",
    color: "#bbb",
    borderRadius: 5,
    borderColor: "#fff",
  },
});
