import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Counter App</h2>
      <Counter />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
