import React from "react";
import { globalStyles } from "../styles/GlobalStyles";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";

export default function Home(props) {
  return (
    <View>
      <Text style={globalStyles.titre}>HOME</Text>

      <Button name="Logout" onClick={props.onSubmit}></Button>
    </View>
  );
}
