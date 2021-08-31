import React from "react";

export default function TimeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();

  return `${hour} : ${min} - ${date} / ${month}`;
}
