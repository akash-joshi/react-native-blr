import { useState } from "react";

const generateRandomArray = () => {
  return new Array(5).fill(0).map(() => (Math.random() * 100).toFixed(0));
};

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count}
    </div>
  );
}

export default function Keys() {
  const [array, setArray] = useState(generateRandomArray());

  console.log({ array });

  return (
    <div style={{ padding: "1em" }}>
      <div>Rendering a List</div>
      {array.map((element, index) => (
        <div key={index}>
          <Counter initialCount={parseInt(element)} />
        </div>
      ))}
      <button
        onClick={() => {
          setArray([...generateRandomArray(), ...array]);
        }}
      >
        Add Elements
      </button>
    </div>
  );
}
