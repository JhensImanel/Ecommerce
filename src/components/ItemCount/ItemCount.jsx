import { useState } from 'react';

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <button className='bg-zinc-400 px-2 py-0 rounded-full' onClick={handleDecrement}>-</button>
      <p>{count}</p>
      <button className='bg-zinc-400 px-1.5 py-0 rounded-full' onClick={handleIncrement}>+</button>
    </>
  );
};

export default ItemCount;
