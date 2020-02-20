import React, { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <img src="imgs/vibes0.jpg" alt="it is time" />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
        />
        <button>add email</button>
      </form>
    </div>
  );
}

export default App;
