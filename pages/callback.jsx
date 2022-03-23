import { useState, useEffect, useCallback } from "react";

const getValue = async (value) => {
  return new Promise((resolve) => {
    resolve(value);
  });
};

export default function Callback() {
  const calculateValue = async () => {
    const value1 = await getValue(1);
    const value2 = await getValue(2);

    return value1 + value2;
  };

  console.log("rerender");

  const [value, setValue] = useState("loading...");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("running effect");
    async function calculateAndSetValue() {
      const newValue = await calculateValue();
      setValue(newValue);
    }

    calculateAndSetValue();
  }, [calculateValue]);

  return (
    <div>
      Hello World
      {value}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
