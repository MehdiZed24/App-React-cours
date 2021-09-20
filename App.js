import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "./components/Button.js";
import { useState } from "react";



export default function App() {
  const [count, setCount] = useState(0);
  function onAdd() {
    setCount(count + 1);
  }

  function onSub() {
    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Bienvenue!</Text>
      <Text style={styles.titre}>{count}</Text>
      <Button name="Ajouter" onClick={onAdd}/>
      <Button name="Soustraire" onClick={onSub} />
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
  titre: {
    fontWeight: "bold",
    padding: 25,
  },
});
