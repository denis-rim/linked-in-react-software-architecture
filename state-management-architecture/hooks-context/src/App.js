import { RecoilRoot } from "recoil";
import { CounterButton } from "./CounterButton";
// import { CounterProvider } from "./CounterProvider";
import "./App.css";

const App = () => {
  return (
    // <CounterProvider>
    <RecoilRoot>
      <h1>State Management Example</h1>
      <CounterButton />
    </RecoilRoot>
    // </CounterProvider>
  );
};

export default App;
