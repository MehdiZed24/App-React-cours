import React from "react";
import { globalStyles } from "../styles/GlobalStyles";
import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import Button from "../components/Button";
import { UserContext } from "../contexts/UserContext";

export default function Home() {
  const context = useContext(UserContext);
  const handleLogout = () => {
    context.setUser({ email: "", isAuth: false });
  };
  return (
    <View>
      <Text style={globalStyles.titre}>HOME</Text>

      <Button name="Logout" onClick={handleLogout}></Button>
    </View>
  );
}
