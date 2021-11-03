// import { useState } from "react";
// import { useContext } from "react";
// import { CounterContext } from "./CounterContext";
import { useRecoilState } from "recoil";
import { counterState } from "./counterState";
import { incrementByState } from "./incrementByState";

export const CounterButton = () => {
  // const [numberOfClicks, setNumberOfClicks] = useState(0);
  // const [incrementBy, setIncrementBy] = useState(1);
  // const { numberOfClicks, increment } = useContext(CounterContext);
  const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);
  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);

  return (
    <>
      <p>You have clicked the button {numberOfClicks} times.</p>
      <label>
        Increment By:
        <input
          value={incrementBy}
          onChange={(e) => setIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}>
        Click
      </button>
    </>
  );
};
