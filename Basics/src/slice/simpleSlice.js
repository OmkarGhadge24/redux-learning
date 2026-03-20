import { createSlice } from "@reduxjs/toolkit";

export const simpleSlice = createSlice({
    name : 'counter',
    initialState :{
        value : 0
    },
    reducers :{
        increment :(state)=>{
            state.value += 1
        },
        decrement : (state)=>{
            state.value > 0 ? state.value -=1 : state
        },
        incrementByValue : (state , actions) =>{
            state.value += actions.payload
        }
    }
})

export const {increment, decrement, incrementByValue} = simpleSlice.actions;
export default simpleSlice.reducer;