import firebase from "firebase/app";
import "firebase/firestore";
import React from "react";
import { useUser } from "./useUser";

export default function ReadtoFirestore() {
  const { user } = useUser();
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc(user.id)
        .onSnapshot((doc) => console.log(doc.data()));
      alert("data was read");
    } catch (error) {
      console.log(error);
    }
  };
  return <button onClick={readData}> read data to fire base</button>;
}
