import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import login from "../screens/Login";
import Signin from "../screens/Signin";

const screens = {
  Login: {
    screen: login,
  },
  Signin: {
    screen: Signin,
  },
};
const AuthStack = createStackNavigator(screens);
export default createAppContainer(AuthStack);
