import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";

export default function Signin(props) {
  return (
    <View>
      <Text style={globalStyles.titre}>SIGNIN</Text>
      <Text style={globalStyles.titre}>
        {/* 
        On peut recevoir des prop sà travers la navigation : 
        {props.navigation.getParam("email")} */}
      </Text>
      <View style={styles.header}>
        <Text style={globalStyles.titre}>Bienvenue!</Text>
        <Text style={styles.text}>Commencez par vous connecter.</Text>
      </View>
    </View>
  );
}
