const ItemCount = ({ count, handleCount, stock, initial }) => {

  const handleIncrement = () => {
    if (count < stock) {
      handleCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > initial) {
      handleCount(count - 1);
    }
  };

  return (
    <div className='flex items-center'>
      <button className='bg-zinc-400 px-2 rounded-full' onClick={handleDecrement}>-</button>
      <p className='mx-2'>{count}</p>
      <button className='bg-zinc-400 px-1.5 rounded-full' onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ItemCount;
