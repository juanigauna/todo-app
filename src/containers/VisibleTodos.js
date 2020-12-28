import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo, deleteTodo, clear } from '../actions'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    clear: () => dispatch(clear())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)