import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../App.css";

function SignIn() {
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#333" }}>Welcome!!</h1>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
}

export default SignIn;
