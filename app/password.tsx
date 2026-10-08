"use client";
import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(10);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [special, setSpecial] = useState(false);
  const [password, setPassword] = useState("");

  function generate() {
    let chars = "";
    if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (special) chars += "!#$%&/()=?¡¿'[]{}*+-.,;:_<>|";

    if (chars == "") {
      setPassword("");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(result);
  }

  function copy() {
    navigator.clipboard.writeText(password);
  }

  let strength = "Weak";
  let color = "red";
  if (length >= 8) {
    strength = "Medium";
    color = "goldenrod";
  }
  if (length >= 14) {
    strength = "Strong";
    color = "green";
  }

  return (
    <div style={{ width: 350, margin: "50px auto", textAlign: "center" }}>
      <h2>PASSWORD GENERATOR</h2>
      <p>Create strong and secure passwords to keep your account safe online.</p>

      <div>
        <input
          value={password}
          readOnly
          style={{ padding: 10, width: 200 }}
        />
        <button onClick={generate} style={{ padding: 10 }}>↻</button>
        <button
          onClick={copy}
          style={{ padding: "10px 20px", backgroundColor: "#3cc4c4", color: "white", border: "none", borderRadius: 5 }}
        >
          Copy
        </button>
      </div>
      <p style={{ color: color, textAlign: "left" }}>{strength}</p>

      <p style={{ textAlign: "left" }}>Password Length: {length}</p>
      <input
        type="range"
        min={4}
        max={20}
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
        style={{ width: "100%" }}
      />

      <div style={{ textAlign: "left" }}>
        <label>
          <input type="checkbox" checked={upper} onChange={() => setUpper(!upper)} /> Uppercase
        </label>
        <br />
        <label>
          <input type="checkbox" checked={lower} onChange={() => setLower(!lower)} /> Lowercase
        </label>
        <br />
        <label>
          <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} /> Numbers
        </label>
        <br />
        <label>
          <input type="checkbox" checked={special} onChange={() => setSpecial(!special)} /> Special Characters
        </label>
      </div>
    </div>
  );
}
