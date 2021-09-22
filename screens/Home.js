import React from "react";
import { globalStyles } from "../styles/GlobalStyles";
import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import Button from "../components/Button";
import { UserContext } from "../contexts/UserContext";

UserContext;
export default function Home() {
  const context = useContext(UserContext);

  const handleLogout = () => {
    context.setUser({ email: "", isAuth: false }); // fonction qui déconnecte
  };
  return (
    // mon composant home a une vue avec son style, son button qui a un nom (logout) et une fonction qui se déclenche au clicK.
    <View>
      <Text style={globalStyles.titre}>Hosme</Text>
      <Button name="Logout" onClick={handleLogout}></Button>
    </View>
  );
}
