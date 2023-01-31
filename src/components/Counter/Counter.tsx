import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <strong data-testid='count'>{count}</strong>

        {count > 2 && <div>count is now: {count}</div>}
      </div>
      <button onClick={() => setCount((count) => count - 1)}>count down</button>
      <button onClick={() => setCount((count) => count + 1)}>count up</button>
    </div>
  );
};

export default Counter;
