import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
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
