import { Provider } from "react-redux";
import { CounterButton } from "./CounterButton";
import "./App.css";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <>
        <h1>State Management Example</h1>
        <CounterButton />
      </>
    </Provider>
  );
};

export default App;
