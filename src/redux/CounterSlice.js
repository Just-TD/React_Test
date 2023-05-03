import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "counter",
    initialState : { 
        count : 0,
        firstName : "",
        lastName : ""
    },
    reducers : { 
        increment : (state) => { 
            state.count += 1;

        },
        decrement : (state) => { 
            state.count -= 1;
        },
        incrementWithParams : (state,actions) => { 
            state.count += actions.payload

        }
    }

})

export const  {increment,decrement,incrementWithParams} = counterSlice.actions;

export default counterSlice.reducer

