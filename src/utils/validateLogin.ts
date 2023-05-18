import { SetStateAction } from "react";

export const passwordRegEx = RegExp(
  /(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{0,}/
);

export const validateLogin = (
  validUser: LuxolisUser,
  formState: LuxolisUser,
  setIsLoggedIn: (value: SetStateAction<boolean>) => void,
  setWrongPassword: (value: SetStateAction<boolean>) => void
) => {
  if (
    formState.password === validUser.password &&
    formState.username === validUser.username &&
    passwordCheck(formState.password)
  ) {
    setIsLoggedIn(true);
  } else if (
    formState.username === validUser.username &&
    formState.password !== validUser.password
  ) {
    setWrongPassword(true);
  } else {
    null;
  }
};

export const passwordCheck = (password: LuxolisUser["password"]) => {
  return passwordRegEx.test(password);
};
