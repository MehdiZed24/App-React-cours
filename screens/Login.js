import React from "react";
import { useState, useContext } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { globalStyles } from "../styles/GlobalStyles";
import { UserContext } from "../contexts/UserContext";
import { Formik } from "formik";
import * as yup from "yup";

//Par choix, je décide de déclarer le authSchema à l'exterieur dans l'éeventualité de l'exporter

const authSchema = yup.object({
  email: yup
    .string()
    .email("email Incorrect!")
    .required("Email ne peux être vide"),
});

export default function Login(props) {
  const [theEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext);
  password;
  // Fonction qui permet de mettre a jour l'utilisateur
  const handleSubmit = () => {
    context.setUser({ email: theEmail, isAuth: true });
  };
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.header}>
        <Text style={globalStyles.titre}>Bienvenue!</Text>
        <Text style={styles.text}>Commencez par vous connecter.</Text>
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        //onSubmit est un parametre qui accepte une fonction à executer
        onSubmit={(values) => {
          console.log(values.email);
        }}
      >
        {/* Cette fonction va afficher nos inputs a l'écran, et grâce au formikProps (terme personnel) on pourra accéder à d'autres paramètres comme les valeurs d'e-mail ou password */}
        {(formikProps) => (
          <>
            {/* Le paramètre  valeur permet a formik d'écouter les changements de notre input */}
            <Input
              name="Email"
              onChange={setEmail}
              valeur={formikProps.values.email}
            />
            <Input
              name="Mot de passe"
              onChange={setPassword}
              isPassword
              valeur={formikProps.values.password}
            />
            {/* On utilise le mot-clé fourni par Formik 'handleSubmit', pour exécuter la fonction onSubmit préciser plus haut */}
            <Button name="Login" onClick={formikProps.handleSubmit}></Button>
          </>
        )}
      </Formik>
      <Button
        name="Signin"
        // Il faut passer une référence à la fonction en utilisant la syntaxe en flèche.
        onClick={() => props.navigation.navigate("Signin", { email: theEmail })}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#093357",
    width: "100%",
  },
  text: {
    fontWeight: "bold",
    padding: 12,
    fontSize: 16,
    color: "#bbb",
  },
});
