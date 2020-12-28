import { ADD_TODO, ON_CHANGE_INPUT, TOGGLE_TODO, DELETE_TODO, CLEAR } from './actionTypes'

let nextId = 0
export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextId++,
    text
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})
export const clear = () => ({
    type: CLEAR
})
export const onChageInput = (text) => ({
    type: ON_CHANGE_INPUT,
    text
})