import { useState } from "react";
import "./App.css";
import Components1 from "./components/Components1.jsx";
import Button from "./components/button.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }

  return newState;
}

const store = createStore(reducer);

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Provider store={store}>
        <Components1 />
        <Button
          onIncrease={() => {
            setCount(count + 1);
          }}
          count={count}
          setCount={setCount}
        />
      </Provider>
    </div>
  );
}
