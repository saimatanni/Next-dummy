"use client";
import React, { useState } from "react";
import "./style.css";
import Link from "next/link";
const AddUser = () => {
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST", // Fix the method to uppercase "POST"
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json(); // Fix the JSON parsing to lowercase "json"
    console.log("response", response);
  };
  return (
    <div className="add-user">
      <h1>Add new user</h1>
      <p>
      <Link href='/users'>User list</Link>
      </p>
      <br />
      <br />
      <input
        placeholder="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />

      <input
        type="email"
        placeholder="email"
        name="name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="age"
        name="name"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <button onClick={addUser}>Add user</button>
    </div>
  );
};

export default AddUser;
