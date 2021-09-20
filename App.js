import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(63999);
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
     <Button />


      <StatusBar style="auto" />
    </View>
  );
}


