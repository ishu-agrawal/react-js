import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1, text: 'Hello'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //  in context API, we used to declare the function
        // but in redux, we will define it
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        // state and action will always be available
        // state will give access of all the entries present in initialState
        // action will provide access to the value which is necessary to perform an action
        // for eg: to remove a todo, we will need access to id, this id will be provided by action
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                    (todo.id === action.payload.id)
                    ? { ...todo, text: action.payload.text }
                    : todo
            );
        }
        
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer;