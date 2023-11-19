// Defining Constant
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'Add_user';

// state 
const initialCounterState = () => {
    count: 0;
    user: [
        { name: "Doha" }
    ];
};

// Action Dispatch -> OBJECT - type, payload
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

const addUser = () => {
    type: ADD_USER;
    payload: [
        {
            name: "Doha"
        }
    ];
};

// reducer for counter
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
            }
        default:
            state;
    }
};