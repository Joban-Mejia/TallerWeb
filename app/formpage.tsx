"use client";
import { useState } from "react";

export default function FormPage() {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [age, setAge] = useState("");
  const [sent, setSent] = useState<any>(null);

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username: username.toUpperCase(), fullname: fullname.toUpperCase(), age }),
    });
    alert("Hola uwu");
    setSent({ username: username.toUpperCase(), fullname: fullname.toUpperCase(), age });
  }

  return (
    <>
    <form onSubmit={enviar}>
      <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full max-w-xs px-4 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg outline-none transition-all duration-200 placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>
      <br />
      <input placeholder="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} className="w-full max-w-xs px-4 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg outline-none transition-all duration-200 placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>
      <br />
      <input placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} className="w-full max-w-xs px-4 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg outline-none transition-all duration-200 placeholder-gray-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"/>
      <br />
      <button style={{backgroundColor: '#dc3545', color: 'white', padding: '10px 20px', margin: '5px', fontSize: '16px',border: 'none',borderRadius: '5px',cursor: 'pointer'}}
      type="submit">submit</button>
    </form>
    {sent && (
      <div>
        <p>request sent to DB with below request data</p>
        <p>username: {sent.username}</p>
        <p>fullname: {sent.fullname}</p>
        <p>age: {sent.age}</p>
      </div>
    )}
    </>
  );
}