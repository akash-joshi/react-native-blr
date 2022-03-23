import { useState, useEffect, useMemo } from "react";

const getArea = (radius) => Math.PI * radius * radius;

function Area({ radius }) {
  // const [area, setArea] = useState(getArea(radius));

  // useEffect(() => {
  //   setArea(getArea(radius));
  // }, [radius]);

  const area = useMemo(() => {
    return getArea(radius);
  }, [radius]);

  return <div>{area}</div>;
}

export default function Memo() {
  const [radius, setRadius] = useState(1);

  return (
    <div>
      Hello World
      <button onClick={() => setRadius(radius + 1)}>Increment</button>
      <Area radius={radius} />
    </div>
  );
}
