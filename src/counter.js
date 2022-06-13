import React, { useReducer } from "react";

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { firstCounter: state.firstCounter + action.value };
    case ACTIONS.DECREMENT:
      return { firstCounter: state.firstCounter - action.value };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
};

function Counter() {
    
  const [count, dispatch] = useReducer(reducer, initialState);

 

  return (
    <div className="hero-section">
      <h3>{count.firstCounter}</h3>
      <button
        onClick={() => dispatch({ type: ACTIONS.DECREMENT, value: 5 })}
        className="btn"
      >
        -
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })} className="btn">
        Reset
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.INCREMENT, value: 5 })}
        className="btn"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
