import React from "react";
import firebase from "firebase/app";
import "firebase/auth";

import "firebase/firestore";
import { Alert } from "react-native";

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

export async function logIn(email, password) {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    Alert.alert("Un problème est survenu", error.message);
    return false;
  }
  return true;
}
//La fonction va récupérer le document associé au uid fournit en paramètre
export async function getInformations(uid) {
  const db = firebase.firestore();
  return db.collection('users').doc(uid)
}
