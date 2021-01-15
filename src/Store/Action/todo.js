
export const ADD_TODO = "ADD_TODO";
export const addTodo = (value) =>({
    type: ADD_TODO,
    payload:value
})

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (value) =>({
    type: REMOVE_TODO,
    payload:value
})


export const CLEAN_TODO = "CLEAN_TODO";
export const cleanTodo = (value) =>({
    type: CLEAN_TODO,
    payload:value
})

