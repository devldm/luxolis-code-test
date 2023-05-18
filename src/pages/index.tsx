import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import cart from "../../public/cart.svg";
import background from "../../public/background.svg";
import user from "../../public/user.svg";
import lock from "../../public/lock.svg";
import Image from "next/image";
import FormInput from "../components/FormInput";
import PopUp from "~/components/PopUp";
import { validateLogin } from "~/utils/validateLogin";

const emptyFormState: LuxolisUser = {
  username: "",
  password: "",
};

const validUser: LuxolisUser = {
  username: "test@luxpmsoft.com",
  password: "test1234!",
};

const Home: NextPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formState, setFormState] = useState(emptyFormState);
  const [wrongPassword, setWrongPassword] = useState(false);

  return (
    <>
      <Head>
        <title>Luxolis</title>
        <meta name="description" content="Luxolis coding test" />
        <link
          rel="icon"
          href="https://em-content.zobj.net/thumbs/240/google/350/rocket_1f680.png"
        />
      </Head>
      {isLoggedIn ? (
        <main></main>
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-center bg-bg-blue">
          <Image
            src={background as string}
            alt="Background svg graphics"
            className="absolute h-full w-full object-cover"
          />
          <div className="container z-10 flex flex-col items-center justify-center gap-12 px-2 py-16">
            {wrongPassword ? (
              <PopUp
                onClickFn={() => setWrongPassword(false)}
                popUpText={"The provided password is wrong"}
              />
            ) : null}
            <Image src={cart as string} alt="icon of a cart with up arrow" />
            <div className="grid grid-cols-1 gap-4">
              <form
                action=""
                className="grid grid-cols-1 gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  validateLogin(
                    validUser,
                    formState,
                    setIsLoggedIn,
                    setWrongPassword
                  );
                }}
              >
                <FormInput
                  svg={user as string}
                  setFormStateFn={(e) => {
                    setFormState({
                      ...formState,
                      username: e.target.value.toLowerCase(),
                    });
                  }}
                  placeholder={"USERNAME"}
                  id={"username"}
                  type={"email"}
                  svgAlt={"user icon"}
                />
                <FormInput
                  svg={lock as string}
                  setFormStateFn={(e) => {
                    (e.target as HTMLInputElement).setCustomValidity("");
                    setFormState({
                      ...formState,
                      password: e.target.value,
                    });
                  }}
                  setInvalidState={(e) => {
                    const input = e.target as HTMLInputElement;
                    input.validity.patternMismatch &&
                      input.setCustomValidity("Wrong combination");
                  }}
                  placeholder={"PASSWORD"}
                  id={"password"}
                  type={"password"}
                  svgAlt={"lock icon"}
                  pattern="^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{0,}$"
                />

                <button
                  type="submit"
                  className="mt-4 rounded-md bg-white p-2 font-semibold text-login-blue"
                >
                  LOGIN
                </button>
                <button className="text-right font-medium hover:underline">
                  Forgot password?
                </button>
              </form>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
