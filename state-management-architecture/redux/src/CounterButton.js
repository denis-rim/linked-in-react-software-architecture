import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterButtonClicked } from "./actions";
import { getNumberOfClicks } from "./selectors";

export const CounterButton = () => {
  const numberOfClicks = useSelector(getNumberOfClicks);
  const [incrementBy, setIncrementBy] = useState(1);
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(counterButtonClicked(incrementBy))}>
        Click
      </button>
    </>
  );
};
