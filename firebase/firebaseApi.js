import React from "react";
import firebase from "firebase/app"
import "firebase/auth"

import "firebase/firestore";

export async function registration(email, password, lastName, firstName) {
  try {
    console.log("test");
    await firebase.auth().createUserWithEmailAndPassword(email, password); //<===Création de l'utilisateur  - Si erreur (Email existe ou email incorrect) la fonction passera au catch

    //(ci dessous)Nous renvoie les données de l'utilisateur - Utilisateur n'existe pas
    const currentUser = firebase.auth().currentUser; //le second currentUser est une fonction de firebase.

    //Récupérer l'objet base de donnée
    const db = firebase.firestore();
    db.collection("users").doc(currentUser.uid).set({
      email: currentUser.email,
      lastName: lastName,
      firstName,
    });
  } catch (error) {
    Alert.alert("Un problème est survenu", error.message); //Alert vient de react natif, c'est une fonction qui prend deux paramètres.
  }
}
