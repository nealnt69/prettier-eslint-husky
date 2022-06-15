import React, { useTransition, useState, useDeferredValue } from "react";

import { useGlobalContext } from "@context/useGlobalContext";

function HookTransitionAndDeferred() {
  const { globalState, dispatch } = useGlobalContext();
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<any[]>([]);
  const deferredQuery = useDeferredValue(count);

  const handleClick = () => {
    setCount((c) => c + 1);
    dispatch({ type: "increment" });
    startTransition(() => {
      console.log(count);
      const myArr = Array(50000)
        .fill(1)
        .map((el, i) => count + 50000 - i);
      setItems(myArr);
    });
  };

  {
    let a = "qwe";
    console.log(a);
  }

  console.log(count);
  console.log(deferredQuery);

  return (
    <div>
      <p>{Math.random()}</p>
      <p>{globalState.count}</p>
      <button onClick={handleClick}>{count}</button>
      <p>deferredQuery: {deferredQuery}</p>
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookTransitionAndDeferred;
