import { Auth, Common } from "../../features";
import { createEnum } from "./type";

export const loggedInScreens = {
  Home: Common.Home,
};

export const notLoggedInScreens = {
  SignIn: Auth.SignIn,
};

export const ROUTES = createEnum({
  //Auth Rotues
  Signin: "Signin",

  //Common Routes
  Home: "Home",
});
