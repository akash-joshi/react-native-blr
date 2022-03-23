import { useState } from "react";

function Counter({ count }) {
  const element = <div>Counter: </div>;

  console.log({ element });

  return element;
}

export default function Vdom() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Counter count={count} />
    </div>
  );
}
