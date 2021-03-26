export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {
    case 'DELETE_TODO':
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}
    case 'ADD_TODO':

      return { todos: state.todos.concat(action.payload.text) };

    default:
      return state;
  }
}
