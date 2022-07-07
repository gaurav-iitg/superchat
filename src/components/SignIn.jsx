import React from "react";
import GoogleButton from "react-google-button";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "../App.css";
import { publicKey } from "../encryption";

function SignIn() {
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then(async (result) => {
      console.log(publicKey);
      const { uid } = auth.currentUser;
        //writing public key to firebase
        await addDoc(collection(db, "public_keys"), {
          uid: uid,
          publicKey: publicKey,
        });
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
