import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name : "todos",
    initialState : [],
    reducers : {
        add : (state, action)=>{
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        update : (state, action)=>{
            const todo = state.find(t => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        remove : (state, action)=>{
            return state.filter(t => t.id !== action.payload);
        }
    }
})

export const {add, update, remove} = TodoSlice.actions;

export default TodoSlice.reducer;