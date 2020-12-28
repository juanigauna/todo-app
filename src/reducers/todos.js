const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed } :
                    todo)
        case 'DELETE_TODO':
            let newState = state.filter((todo, index) => index !== action.id)
            return state = newState
        case 'CLEAR':
            return state = []
        default:
            return state
    }
}
export default todos