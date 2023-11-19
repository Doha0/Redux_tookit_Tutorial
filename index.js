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
const incrementCounter = () =>{
    return {
        type: INCREMENT,
    };
};
const decrementCounter = () =>{
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
const 