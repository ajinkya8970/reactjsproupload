import { useReducer } from "react";

function App() {
  const initialState = {
    counter: 0,
  };
  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case "ActionType":
        newState = { counter: state.counter + 1 };
        break;
      case "decrease":
        newState = { counter: state.counter - 1 };
        break;
      default:
        console.log("error");
    }
    return newState;
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  // initial state

  const action = {
    type: "ActionType",
  };
  const handleClick = () => {
    dispatch(action);
  };
  console.log(state);

  return <button onClick={handleClick}>Click me</button>;
}

export default App;
