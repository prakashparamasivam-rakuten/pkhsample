import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterSlice {
    value: number;
}

const initialState:CounterSlice = {
    value: 0
};

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers:{
        increment: (state)=>{
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount:(state,action:PayloadAction<number>) =>{
            state.value += action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(incrementAsync.pending,(state)=>{
            console.log('incremenmtAsync.pending....')
        })
        builder.addCase(incrementAsync.fulfilled,(state,action:PayloadAction<number>) => {
            state.value += action.payload
        });
    }
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAsync",
    async (amount:number) => {
        await new Promise((resolve) => setTimeout(resolve,1000));
        return amount;
    }
)

export const {increment,decrement,incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
