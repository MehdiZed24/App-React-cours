import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Home from "./screens/Home";
import { UserContext } from "./contexts/UserContext";
import AuthStack from "./routes/AuthStack";

export default function App() {
  const [user, setUser] = useState({ email: "", isAuth: false }); //Déclaration d'une constante "Utilisateur"

  return (
    <View style={styles.container}>
      {/*Rendu conditionnel en rapport avec user.isAuth */}
      <UserContext.Provider value={{ user, setUser }}>
        {user.isAuth ? <Home /> : <AuthStack> </AuthStack>}
        <StatusBar hidden={false} style="auto" />
      </UserContext.Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontWeight: "bold",
  },
});
