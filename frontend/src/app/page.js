"use client"

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1337/api/names", {
        name,
        imageUrl: image,
      });
      alert("Submitted Successfully!");
    } catch (err) {
      alert("Submission failed");
      console.error(err);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Submit Image Entry</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <input
          type="text"
          placeholder="Enter image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
