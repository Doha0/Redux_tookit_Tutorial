/*
1.state
2.actions
3.reducer
4.store
*/

const { createStore } = require("redux");

// defining CONSTANT
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// declaring state
const initialCounterState = {
  count: 0,
};

// Actions for dispatch
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const reset = () => {
  return {
    type: RESET,
  };
};

// Reducer to process logics
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case RESET:
      return {
        ...state,
        count: 0,
      };

    default:
      state
  };
};

// store to process state and give output
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState())
});

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
store.dispatch(decrementCounter());
store.dispatch(reset());