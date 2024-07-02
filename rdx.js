const INCREMENT = 'INCREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const initialState = {
    count: 0
};

const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    };
};

const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    };
};

const resetCounterAction = () => {
    return {
        type: RESET,
    };
};

const resetCounterAction = () => {
    return {
        type: RESET,
    };
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        case RESET:
            return {
                count: 0
            };
        default:
            return state;
    }
};


const { createStore } = require('redux');

const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

