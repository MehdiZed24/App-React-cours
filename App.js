import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";

export default function App() {
  const [user, setUser] = useState({ email: "", isAuth: false }); //Déclaration d'une constante "Utilisateur"

  //Fonction qui permet de mettre à jour l'utilisateur
  const handleSubmit = (valeur) => {
    setUser({ email: valeur, isAuth: true });
  };

  const handleLogout = () => {
    setUser({ email: "", isAuth: false });
  };

  return (
    <View style={styles.container}>
      {/*Rendu conditionnel en rapport avec user.isAuth */}
      {user.isAuth ? (
        <Home onSubmit={handleLogout}></Home>
      ) : (
        <Login onSubmit={handleSubmit}></Login>
      )}
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
});
