import React from "react";

export default function Title(props) {
  return (
    <div>
      <h1>{props.name ? props.name : null}</h1>
      {props.date ? (
        <h3 style={{ textAlign: "center", margin: "1rem" }}>{props.date}</h3>
      ) : null}
    </div>
  );
}
