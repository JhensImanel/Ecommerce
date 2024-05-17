import { useState } from 'react';

export default function CardWidget() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button className="flex gap-1 items-center" onClick={() => setCount(count + 1)}>
        <img src="/shopping-cart.svg" className="size-5" />
        {count}
      </button>
    </>
  );
}
