"use client";
import { useState, useEffect } from "react";

export default function Timer() {
  const [tiempo, setTiempo] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    if (!corriendo) return;
    const id = setInterval(() => setTiempo((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [corriendo]);

  return (
    <div style={{ width: 350, margin: "50px auto", textAlign: "center" }}>
      <h2>Timer</h2>
      <p>{tiempo}</p>
      <button style={{backgroundColor: '#28a745', 
      color: 'white', 
      padding: '10px 20px',
      margin: '5px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'}}
      onClick={() => setCorriendo(true)}>start</button>
<button style={{backgroundColor: '#ca8a04', 
      color: 'white', 
      padding: '10px 20px',
      margin: '5px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'}}    
      onClick={() => setCorriendo(false)}>stop</button>
<button style={{backgroundColor: '#dc3545', 
      color: 'white', 
      padding: '10px 20px',
      margin: '5px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'}}      
      onClick={() => { setCorriendo(false); setTiempo(0); }}>reset</button>
    </div>
  );
}
