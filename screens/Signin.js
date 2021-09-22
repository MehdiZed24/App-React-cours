import { Formik } from "formik";
import React from "react";
import { View, Text, Input, Button } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import * as yup from "yup";

const authSchema = yup.object({
  email: yup
    .string()
    .email("email incorrect")
    .required("email ne peut pas être vide"),
  password: yup
    .string()
    .required("password ne peut pas être vide")
    .min(6, "le mot de passe doit contenir au moins 6 caratères ")
    .test("isCorrectPassword", "Mot de passe incorrect", (valeur) => {
      return true;
    }),
  lastName: yup.string().required("Nom ne peut pas être vide"),
  firstName: yup.string().required("Prénom ne peut pas être vide"),
});

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
      <View>
        <Formik
          initialValues={{
            email: "",
            password: "",
            lastName: "",
            firstName: "",
          }}
          validationSchema={authSchema}
          onSubmit={(values) => {
            console.log(values.firstName);
          }}
        >
          {(formikProps) => (
            <>
              <Input
                name="email"
                onChange={formikProps.handleChange("email")}
                valeur={formikProps.values.email}
                onBlur={formikProps.handleBlur("email")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.email && formikProps.errors.email}
              </Text>
              <Input
                name="password"
                onChange={formikProps.handleChange("password")}
                valeur={formikProps.values.password}
                onBlur={formikProps.handleBlur("password")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.password && formikProps.errors.password}
              </Text>
              <Input
                name="lastName"
                onChange={formikProps.handleChange("lastName")}
                valeur={formikProps.values.lastName}
                onBlur={formikProps.handleBlur("lastName")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.lastName && formikProps.errors.lastName}
              </Text>
              <Input
                name="firstName"
                onChange={formikProps.handleChange("firstName")}
                valeur={formikProps.values.firstName}
                onBlur={formikProps.handleBlur("firstName")}
              />
              <Text style={globalStyles.errorText}>
                {formikProps.touched.firstName && formikProps.errors.firstName}
              </Text>
              
              <Button
                name="Inscription"
                onClick={formikProps.handleSubmit}
              ></Button>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}
