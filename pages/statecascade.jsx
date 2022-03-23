import React, { useState } from "react";

const SecondChild = () => {
  console.log("second render");

  return <div>Second</div>;
};

const MemoizedChild = React.memo(SecondChild);

const FirstChild = ({ count }) => {
  console.log("rendered");

  return (
    <div>
      Hey:
      {count}
      <MemoizedChild count={1} />
    </div>
  );
};

export default function StateCascade() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <FirstChild count={count} />
    </div>
  );
}
