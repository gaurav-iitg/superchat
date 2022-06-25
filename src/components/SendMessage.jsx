import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function SendMessage() {
  const [message, setMessage] = useState("");
  const { uid, displayName, photoURL } = auth.currentUser;
  async function sendMessage(e) {
    e.preventDefault();
    await addDoc(collection(db, "messages"), {
      displayName,
      photoURL,
      uid,
      createdAt: new Date(),
      text: message,
    });
    setMessage("");
  }
  return (
    <form onSubmit={sendMessage}>
      <input
        style={{
          width: "100%",
          fontSize: "15px",
          fontWeight: "550",
          marginLeft: "5px",
          marginBottom: "-3px",
        }}
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        name="message"
        placeholder="Write something nice.."
      />
      <button
        style={{
          width: "18%",
          fontSize: "15px",
          fontWeight: "550",
          margin: "4px",
          maxWidth: "200px",
        }}
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
