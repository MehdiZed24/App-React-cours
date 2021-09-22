import React from 'react'
import { View, Text } from "react-native";
import { globalStyles } from '../styles/GlobalStyles';


export default function Signin(props) {
  return (
<View>
  <Text style={globalStyles.titre}>SIGNIN</Text>
  <Text style={globalStyles.titre}>{props.navigation.getParam('email')}</Text>
</View>
  )
}
