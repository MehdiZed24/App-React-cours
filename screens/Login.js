import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("Email :" + email + "   -   Password : " + password);
  };
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.titre}>Bienvenue!</Text>
        <Text style={styles.text}>Commencez par vous connecter.</Text>
      </View>

      <Input name="Email" onChange={setEmail} />
      <Input name="Mot de passe" onChange={setPassword} isPassword />

      <Button name="Login" onClick={handleLogin}></Button>
    </>
  );
}
const styles = StyleSheet.create({
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
