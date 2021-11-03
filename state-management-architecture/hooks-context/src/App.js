import { RecoilRoot } from "recoil";
import { CounterButton } from "./CounterButton";
// import { CounterProvider } from "./CounterProvider";
import "./App.css";
import { DisplayCount } from "./DisplayCount";

const App = () => {
  return (
    // <CounterProvider>
    <RecoilRoot>
      {/*<DisplayCount />*/}
      <h1>State Management Example</h1>
      <CounterButton />
    </RecoilRoot>
    // </CounterProvider>
  );
};

export default App;
