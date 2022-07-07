import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import SignOut from "./SignOut";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { auth } from "../firebase";
import "../App.css";
function Chat() {
  const [messages, setMessages] = useState([]);
  const currentUser = auth.currentUser;
  // console.log("currentUser", currentUser);
  useEffect(() => {
    //unsub is a function returned by onSnapshot that can be called to stop listening for changes
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(25)
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const msg = snapshot.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setMessages(msg);
    });
    return unsub;
  }, []);
  return (
    <div>
      <SignOut />
      <div className="messages">
        {messages.map(({ data, id }) => (
          <div className="message-box">
            <div
              key={id}
              className={`message ${
                data.uid === currentUser.uid ? "sent" : "received"
              }`}
            >
              <img src={data.photoURL} alt="user" />
              <p
                style={{
                  display: "flex",
                }}
              >
                {data.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
