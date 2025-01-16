//reducers
import { createSlice, nanoid } from '@reduxjs/toolkit'


const initialState = {
    todos: [{id: "abc", task: "demo-task", isDone: false}],
};

export const totoSlices = createSlice({
    name: todos,
    initialState, 
    reducers: () => {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);   //direct mutations
        }
    }
})