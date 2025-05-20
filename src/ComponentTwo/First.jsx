import React from 'react';

function First({ items, addItem }) {
  console.log("child rendered");

  return (
    <div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={addItem}>addItem</button>
    </div>
  );
}

export default React.memo(First);
