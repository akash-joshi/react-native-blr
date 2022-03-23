import { useEffect, useState } from "react";

function Form() {
  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <form>
      <input type="text" />
      <input type="checkbox" />
    </form>
  );
}

export default function FormReset() {
  const [statekey, setKey] = useState(1);

  return (
    <div>
      <button onClick={() => setKey(statekey + 1)}>Reset Form</button>

      <Form key={statekey} />
    </div>
  );
}
