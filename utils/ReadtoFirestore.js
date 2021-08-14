import firebase from "firebase/app";
import "firebase/firestore";
import React from "react";

export default function ReadtoFirestore() {
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc("myDocument")
        .onSnapshot((doc) => console.log(doc.data()));
      alert("data was read");
    } catch (error) {
      console.log(error);
    }
  };
  return <button onClick={readData}> read data to fire base</button>;
}
