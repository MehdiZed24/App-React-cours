import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as yup from "yup";
import Input from "../components/Input";
import Button from "../components/Button";
import { registration } from "../firebase/firebaseApi";
import * as firebase from "firebase";

const authSchema = yup.object({
  email: yup
    .string()
    .email("Email Incorrect !")
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
  const onRegistration = (email, password, lastName, firstName) => {
    registration(email, password, lastName, firstName);
    console.log(email);
  };

  return (
    <View>
      {/*On peut recevoir des props à travers la navigation: 
          {props.navigation.getParam("email")} */}

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
              onRegistration(
                values.email,
                values.password,
                values.lastName,
                values.firstName
              );
              console.log(values.email);
            }}
          >
            {(formikProps) => (
              <>
                <Input
                  name="Email"
                  onChange={formikProps.handleChange("email")}
                  valeur={formikProps.values.email}
                  onBlur={formikProps.handleBlur("email")}
                />
                <Text style={globalStyles.errorText}>
                  {formikProps.touched.email && formikProps.errors.email}
                </Text>

                <Input
                  name="Mot de passe"
                  onChange={formikProps.handleChange("password")}
                  isPassword
                  valeur={formikProps.values.password}
                  onBlur={formikProps.handleBlur("password")}
                />
                <Text style={globalStyles.errorText}>
                  {formikProps.touched.password && formikProps.errors.password}
                </Text>

                <Input
                  name="Nom"
                  onChange={formikProps.handleChange("lastName")}
                  valeur={formikProps.values.lastName}
                  onBlur={formikProps.handleBlur("lastName")}
                />
                <Text style={globalStyles.errorText}>
                  {formikProps.touched.lastName && formikProps.errors.lastName}
                </Text>

                <Input
                  name="Prénom"
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
