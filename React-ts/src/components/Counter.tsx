import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Cups Ordered: {count}</p>
      <button onClick={() => setCount(count + 1)}>Order</button>
      <button onClick={() => setCount(count - 1)}>Cancel</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
