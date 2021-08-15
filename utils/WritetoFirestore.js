import firebase from "firebase/app";
import "firebase/firestore";
import React from "react";
import { useUser } from "./useUser";

export default function WritetoFirestore() {
  const { user } = useUser();
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc(user.id)
        .set({
          name: "sara",
          age: 29,
          likes: ["food", 20],
        });
      alert("data was sent");
    } catch (error) {
      console.log(error);
    }
  };
  return <button onClick={sendData}> send data to fire base</button>;
}
