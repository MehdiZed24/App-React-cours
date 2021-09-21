import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} style="auto" />
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
  },
  titre: {
    fontWeight: "bold",
    padding: 25,
    fontSize: 32,
    color: "#bbb",
  },
  text: {
    fontWeight: "bold",
    padding: 12,
    fontSize: 16,
    color: "#bbb",
  },
});
