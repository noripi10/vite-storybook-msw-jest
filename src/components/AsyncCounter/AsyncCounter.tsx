import { useState } from 'react';

const AsyncCounter = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);

  // Math.floor(Math.random() * 10) *
  return (
    <>
      <div>
        <strong data-testid='async_count'>{count}</strong>
        {loading && <div>loading...</div>}
      </div>
      <button
        onClick={async () => {
          setLoading(true);
          // 0s ~ 9s wait
          // await new Promise((resolve) => setTimeout(resolve, 1000));
          setTimeout(() => {
            setCount((count) => count - 1);
            setLoading(false);
          }, 1000);
        }}
        disabled={loading}
      >
        count down
      </button>
      <button
        onClick={async () => {
          setLoading(true);
          // 0s ~ 9s wait
          // await new Promise((resolve) => setTimeout(resolve, 1000));
          setTimeout(() => {
            setCount((count) => count + 1);
            setLoading(false);
          }, Math.floor(Math.random() * 10) * 1000);
        }}
        disabled={loading}
      >
        count up
      </button>
    </>
  );
};

export default AsyncCounter;
