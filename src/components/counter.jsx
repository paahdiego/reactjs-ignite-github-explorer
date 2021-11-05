import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <p>{counter}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}
