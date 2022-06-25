import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import SignOut from "./SignOut";
import { collection, onSnapshot } from "firebase/firestore";
import { auth } from "../firebase";
import "../App.css";
function Chat() {
  const [messages, setMessages] = useState([]);
  const currentUser = auth.currentUser;
  // console.log("currentUser", currentUser);
  useEffect(() => {
    //unsub is a function returned by onSnapshot that can be called to stop listening for changes
    const unsub = onSnapshot(collection(db, "messages"), (snapshot) => {
      const msg = snapshot.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      // console.log(msg);
      setMessages(msg);
    });
    return unsub;
  }, []);
  return (
    <div>
      <SignOut />
      <div className="messages">
        {messages.map(({ data, id }) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
            key={id}
            className={`message ${
              data.uid === currentUser.uid ? "sent" : "received"
            }`}
          >
            <img src={data.photoURL} alt="" />
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
