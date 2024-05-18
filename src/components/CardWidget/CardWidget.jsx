import { useState } from 'react';

export default function CardWidget() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        className="flex gap-1 items-center hover:bg-gray-100 rounded px-1.5 py-0.5"
        onClick={() => setCount(count + 1)}
      >
        <img src="/shopping-cart.svg" className="size-5" />
        {count}
      </button>
    </>
  );
}
