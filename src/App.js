import React, { useState } from "react";
import "./App.css";

function App() {
  const [suggestions, setSuggestions] = useState([
    "Watch Spirited Away",
    "Try black coffee",
    "Listen to jazz",
    "Go stargazing",
    "Write a short story",
    "Explore a new trail",
    "Learn chess basics",
    "Read a random poem",
    "Call an old friend",
  ]);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setSuggestions([input.trim(), ...suggestions]);
      setInput("");
    }
  };

  return (
    <div className="app">
      <h1 className="header">Just listen to more music</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Add your own idea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="columns">
        {[...Array(3)].map((_, i) => (
          <div className="column" key={i}>
            {suggestions.map((item, j) => (
              <div className="idea" key={`${i}-${j}`}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
