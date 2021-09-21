import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { globalStyles } from "../styles/GlobalStyles";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
  };
  return (
    <>
      <View style={styles.header}>
        <Text style={globalStyles.titre}>Bienvenue!</Text>
        <Text style={styles.text}>Se connecter.</Text>
      </View>

      <Input name="Email" onChange={setEmail} />
      <Input name="Mot de passe" onChange={setPassword} isPassword />

      <Button name="Login" onClick={()=>props.onSubmit(email)}></Button>
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    borderRadius: 5,
    backgroundColor: "#093357",
  },
  text: {
    fontWeight: "bold",
    padding: 12,
    fontSize: 16,
    color: "#bbb",
    textAlign: "center",
  },
});
