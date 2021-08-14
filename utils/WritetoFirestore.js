import firebase from "firebase/app";
import "firebase/firestore";
import React from "react";

export default function WritetoFirestore() {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc("myDocument")
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
