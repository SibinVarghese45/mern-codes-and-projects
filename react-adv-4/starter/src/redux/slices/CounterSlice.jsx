import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1 ;
        }
    }
});

// will export all functions
export const {increment, decrement} = CounterSlice.actions;
// reducer ko export karenge
export default CounterSlice.reducer;