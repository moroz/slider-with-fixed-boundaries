import { ChangeEvent, useCallback, useState } from "react";
import styles from "./App.module.sass";

function App() {
  const [count, setCount] = useState(50);
  const leftBound = 30;
  const rightBound = 80;

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.currentTarget.value);

      if (value < leftBound) {
        setCount(leftBound);
        return;
      }

      if (value > rightBound) {
        setCount(rightBound);
        return;
      }

      setCount(Number(value));
    },
    [setCount]
  );

  const wrapperStyles = {
    "--left-bound": String(leftBound),
    "--right-bound": String(rightBound)
  } as React.CSSProperties;

  return (
    <>
      <div className={styles.wrapper} style={wrapperStyles}>
        <input
          type="range"
          value={count}
          onChange={onChange}
          className={styles.slider}
          min={0}
          step={10}
          max={100}
        />
      </div>
      <p>{count}</p>
    </>
  );
}

export default App;
