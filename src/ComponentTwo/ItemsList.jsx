import React, { useCallback, useMemo, useState } from 'react';
import First from './First';

function ItemsList() {
  const [items, setItems] = useState([3, 1, 4]);
  const [count, setCount] = useState(0);

  const sortedItems = useMemo(() => {
    console.log("sorted items");
    return [...items].sort((a, b) => a - b);
  }, [items]);

  const addItem = useCallback(() => {
    const newItem = Math.floor(Math.random() * 100);
    setItems(prev => [...prev, newItem]);
  }, []);

  return (
    <div>
      <First items={sortedItems} addItem={addItem} />
      <button onClick={() => setCount(c => c + 1)}>RE-RENDER</button>
      <p>{count}</p>
    </div>
  );
}

export default ItemsList;
