import React, { useState } from "react";
import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import SendMessage from "./components/SendMessage";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    user ? setUser(user) : setUser(null);
    console.log(user);
    if (user) {
      console.log("signed in");
    } else {
      console.log("signed out");
    }
  });
  return (
    <>
      {/* <SignIn /> */}
      {user ? (
        <>
          <Chat />
          <SendMessage />
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;
