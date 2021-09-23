import React, { useState } from "react";
import { globalStyles } from "../styles/GlobalStyles";
import { Text, View, StyleSheet, Modal } from "react-native";
import { useContext } from "react";
import Button from "../components/Button";
import { UserContext } from "../contexts/UserContext";
import Cam from "../components/Cam"

UserContext;
export default function Home() {
  const [isCamera, setIsCamera] = useState(false)
  const context = useContext(UserContext);

  const handleLogout = () => {
    context.setUser({ email: "", isAuth: false }); // fonction qui déconnecte
  };
  return (
    // mon composant home a une vue avec son style, son button qui a un nom (logout) et une fonction qui se déclenche au clicK.
    <View>
      {/* Modal est un composant qui s'affiche selon une condition donnée en propriété nommée visible. */}
      <Modal visible={isCamera}>
        <Cam></Cam>
      </Modal>
      <Text style={globalStyles.titre}>Home</Text>
      <Button name="Ouvrir Camera" onClick={()=>setIsCamera(true)}></Button>
      <Button name="Logout" onClick={handleLogout}></Button>
    </View>
  );
}
