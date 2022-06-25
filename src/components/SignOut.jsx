import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import "../App.css";

function SignOut() {
  // console.log(auth.currentUser);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      style={{
        boxShadow: "0px 0px 10px #555",
        zIndex: "1",
        color: "#555",
        padding: "10px 10px 10px 10px",
        display: "flex",
        justifyContent: "space-between",
        position: "fixed",
        width: "100%",
        backgroundColor: "#FAFAFA",
        top: 0,
        borderBottom: "solid 1px lightgray",
      }}
    >
      <h1 style={{ margin: "0", color: "#395dff" }}>SuperChat</h1>
      <button
        style={{
          backgroundColor: "#395dff",
          outline: "none",
          padding: "0px 20px",
          color: "#fff",
          fontSize: "1rem",
        }}
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
}

export default SignOut;
