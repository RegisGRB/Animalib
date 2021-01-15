export const INCREMENT_COUNTER= "INCREMENT_COUNTER";
export const incrementCounter = () =>({
    type: INCREMENT_COUNTER
});

export const DECREMENT_COUNTER= "DECREMENT_COUNTER";
export const decrementCounter = () =>({
    type: DECREMENT_COUNTER
});


export const SETVALUE = "SETVALUE";
export const setValue = (value) =>({
    type: SETVALUE,
    payload:value
})


export const fakefunction = () => dispatch => {
 console.log("hehehe i can do something before redux Action");
dispatch(incrementCounter());
}