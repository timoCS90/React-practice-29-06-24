import React, { useState, useEffect } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  const [changeCount, setChangeCount] = useState(0);
  const [customIncrement, setCustomIncrement] = useState(1);

  // Update document title
  useEffect(() => {
    document.title = `Counter changed ${changeCount} times`;
  }, [changeCount]);

  // Increment
  const increment = () => {
    setCount(count + 1);
    setChangeCount(changeCount + 1);
  };

  // Decrement
  const decrement = () => {
    setCount(count - 1);
    setChangeCount(changeCount + 1);
  };

  // Increment custom value
  const incrementByCustomValue = () => {
    setCount(count + Number(customIncrement));
    setChangeCount(changeCount + 1);
  };

  // Reset count
  const resetCount = () => {
    setCount(0);
    setChangeCount(changeCount + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <div>
        <input
          type="number"
          value={customIncrement}
          onChange={(e) => setCustomIncrement(e.target.value)}
        />
        <button onClick={incrementByCustomValue}>
          Increment by Custom Value
        </button>
      </div>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default CounterApp;
