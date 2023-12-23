"use client";
import axios from "axios";
import React, { useState } from "react";

const Test = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendReq = async () => {
    console.log("run");
    const res = await axios.post(
      "https://restaurant.m0x61h0x64i.ir/auth/signup",
      { email, password }
    );
    console.log(res);
  };

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={sendReq}>Send</button>
    </div>
  );
};

export default Test;
