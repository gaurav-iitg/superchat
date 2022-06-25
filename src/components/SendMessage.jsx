import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { IoMdSend } from "react-icons/io";

function SendMessage() {
  const [message, setMessage] = useState("");
  const { uid, displayName, photoURL } = auth.currentUser;
  async function sendMessage(e) {
    e.preventDefault();
    const tempMessage = message;
    setMessage("");
    if (tempMessage.length > 0) {
      console.log(tempMessage.length);
      await addDoc(collection(db, "messages"), {
        displayName,
        photoURL,
        uid,
        createdAt: serverTimestamp(),
        text: tempMessage,
      });
    }
  }
  return (
    <form
      onSubmit={sendMessage}
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        display: "flex",
      }}
    >
      <input
        style={{
          width: "100%",
          padding: "0 1rem",
          fontSize: "20px",
        }}
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        name="message"
        placeholder="Write something nice.."
      />
      <button
        style={{
          display: "flex",
          color: "blue",
          justifyContent: "center",
          alignItems: "center",
          width: "20%",
          padding: "10px",
          maxWidth: "200px",
          fontSize: "20px",
        }}
        type="submit"
      >
        <span>Send</span>
        <IoMdSend />
      </button>
    </form>
  );
}

export default SendMessage;
