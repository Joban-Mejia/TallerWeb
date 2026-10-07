"use client";
import { useState } from "react";

export default function ProgressBar() {
  const [value, setValue] = useState(10);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let n = parseInt(e.target.value);
    if (isNaN(n)) n = 0;
    if (n < 0) return;
    if (n > 100) n = 100;
    setValue(n);
  };

  return (
    <div style={{ width: 350, margin: "40px auto", padding: 20, border: "4px solid #9c8a6a", textAlign: "center" }}>
      <h2>Progress bar</h2>

      <div style={{ background: "#bbb", borderRadius: 12, height: 22, overflow: "hidden" }}>
        <div style={{ width: value + "%", height: "100%", background: "tomato", color: "white", fontSize: 12, transition: "width .3s" }}>
          {value}%
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <label>Input Percentage: </label>
        <input
          type="number"
          min="0"
          value={value}
          onChange={handleChange}
          style={{ width: 60, borderRadius: 10, border: "2px solid black", textAlign: "center" }}
        />
      </div>
    </div>
  );
}
