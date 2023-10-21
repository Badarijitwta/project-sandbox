import React, { useState } from "react";
import Title from "./Components/Title";

export default function Esign() {
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: "0.4 rem",
    margin: "2rem auto",
  };
  document.body.style.backgroundColor = "#eee";
  return (
    <div className="page">
      <Title name={name} />
      <Title date={date} />
      <p style={{ textAlign: "center", margin: "4rem" }}>
        In India, the concept of a formal oath of citizenship is notably absent
        from the legal and constitutional framework. Unlike some nations where
        new citizens are required to take a solemn oath pledging allegiance and
        loyalty to the country, India's approach to citizenship is different.
        Instead, the Indian Constitution outlines a set of Fundamental Duties in
        Article 51A, which serve as a moral and ethical guide for its citizens.
        While not constituting a traditional oath, these duties encompass a
        range of responsibilities, from upholding the Constitution to promoting
        unity and protecting the environment. This unique approach reflects
        India's emphasis on the principles of duty, responsibility, and ethical
        conduct, which citizens are expected to embrace as an inherent part of
        their identity as Indians.
      </p>

      <footer
        // className="d-flex"
        style={{
          // display: "flex",
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          top: "10vh",
          padding: "2rem",
          margin: "0 auto",
        }}
      >
        <input
          type="date"
          value={date}
          style={inputStyle}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <input
          type="text"
          value={name}
          placeholder="Your Signature"
          style={inputStyle}
          onChange={(e) => {
            setName(e.target.value);
          }}
          maxLength={13}
        />
      </footer>
    </div>
  );
}
