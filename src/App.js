import React, { useState } from "react";
import "./index.css";

function App() {
  const [suggestions, setSuggestions] = useState([
    { name: "Taylor", timestamp: "2025-07-08 2:30PM", text: "Watch *Queen’s Gambit* if you love smart drama." },
    { name: "Javi", timestamp: "2025-07-08 3:45PM", text: "Play *Celeste* — not just fun, but life-changing." },
    { name: "Lena", timestamp: "2025-07-08 5:10PM", text: "*Ted Lasso* will restore your faith in people." }
  ]);

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      const now = new Date();
      const formattedTime = now.toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      const newSuggestion = {
        name,
        text,
        timestamp: formattedTime,
      };
      setSuggestions([newSuggestion, ...suggestions]);
      setName("");
      setText("");
    }
  };

  return (
    <div className="scroll-container">
      {suggestions.map((s, index) => (
        <div key={index} className="card-container">
          <div className="card">
            <h2>{s.text}</h2>
            <div className="meta-info">
              — {s.name} <span>· {s.timestamp}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="card-container">
        <form className="card" onSubmit={handleSubmit}>
          <h2>Contribute your own</h2>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
          />
          <textarea
            placeholder="Your recommendation"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
            rows={4}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
