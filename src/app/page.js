'use client'
import { useState } from 'react';


export default function Home() {
  const [form, setForm] = useState({ name: '', company: '', location: '', story: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('/api/submit-story', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const result = await res.json();
    alert(result.message || 'Error');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="company" onChange={handleChange} placeholder="Company" required />
      <input name="location" onChange={handleChange} placeholder="Location" required />
      <textarea name="story" onChange={handleChange} placeholder="Your story" required />
      <button type="submit">Submit Story</button>
    </form>
  );
}
