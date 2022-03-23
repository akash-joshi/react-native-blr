import { useState } from "react";
import { useRef } from "react";

export default function Refs() {
  const userPositionRef = useRef(undefined);

  console.log("rerender");

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
      onMouseMove={(event) => {
        console.log(userPositionRef.current);
        userPositionRef.current = event.clientX;
      }}
    >
      Hey There!
    </div>
  );
}
