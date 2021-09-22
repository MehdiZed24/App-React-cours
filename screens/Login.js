import React from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { globalStyles } from "../styles/GlobalStyles";
import { Formik } from "formik";
import * as yup from "yup";
// Par choix, je décide de déclarer le authSchema a l'extérieure dans l'éventualité de l'exporter
// on créé deux objets avec leur propriétés
const authSchema = yup.object({
  email: yup
    .string()
    .email("Email Incorrect!")
    .required("Email ne peut pas être vide"),
  password: yup
    .string()
    .required("Le mot de passe ne peut pas être vide")
    .min(6, "Le mot de passe doit contenir au moins 6 caractères.")
    .test("isCorrectPassword", "Mot de passe incorrect", (val) => {
      return true;
    }),
  lastName: yup.string().required("Nom ne peut pas être vide"),
  firstName: yup.string().required("Prénom ne peut pas être vide"),
});
export default function Signin(props) {
  return (
    <View>
      {/* 
        On peut recevoir des props a traves la navigation:
        {props.navigation.getParam("email")} */}
      <View style={globalStyles.header}>
        <Text style={globalStyles.titre}>Bienvenue!</Text>
        <Text style={globalStyles.text}>Commencez par vous connecter.</Text>
      </View>

      <View>
        <ScrollView>
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
                  {formikProps.touched.firstName &&
                    formikProps.errors.firstName}
                </Text>

                <Button
                  name="Inscription"
                  onClick={formikProps.handleSubmit}
                ></Button>
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    </View>
  );
}
