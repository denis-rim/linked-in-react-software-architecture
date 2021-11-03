// import { useState } from "react";
// import { useContext } from "react";
// import { CounterContext } from "./CounterContext";
import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "./counterState";
import { incrementByState } from "./incrementByState";
import { numberOfClicksSelector } from "./numberOfClicksSelector";

export const CounterButton = () => {
  // const [numberOfClicks, setNumberOfClicks] = useState(0);
  // const [incrementBy, setIncrementBy] = useState(1);
  // const { numberOfClicks, increment } = useContext(CounterContext);
  const numberOfClicks = useRecoilValue(numberOfClicksSelector);
  const [clickData, setClicksData] = useRecoilState(counterState);
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
      <button
        onClick={() =>
          setClicksData([
            ...clickData,
            { timestamp: new Date(), amount: incrementBy },
          ])
        }
      >
        Click
      </button>
    </>
  );
};
