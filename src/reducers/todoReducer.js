const intialState = JSON.parse(localStorage.getItem('todo')) || {
  todoList: [],
  selectedTodo: undefined,
};
const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  let parseJsonList = JSON.parse(localStorage.getItem('todo'));
  switch (type) {
    case 'ADD_TODO':
      let nextState = {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: state.todoList.length + Math.random(),
            isFinish: false,
            content: payload.todoContent,
            textColor:payload.textColor
          },
        ],
      };
      localStorage.setItem('todo', JSON.stringify(nextState));
      return nextState;
    case 'REMOVE_TODO':
      let newList = state.todoList.filter((todo) => todo.id !== payload);
      let afterRemove = {
        ...state,
        todoList: [...newList],
      };
      localStorage.setItem('todo', JSON.stringify(afterRemove));
      return afterRemove;
    case 'UPDATE_TODO_CONTENT':
      const updateState = state.todoList.map((todo) => {
        return todo.id === payload.id
          ? { ...todo, content: payload.content,textColor:payload.textColor }
          : todo;
      });
      const afterUpdateState = { ...state, todoList: updateState };
      localStorage.setItem('todo', JSON.stringify(afterUpdateState));
      //   console.log(newState);
      return afterUpdateState;
    case 'UPDATE_TODO_STATUS':
      const newState = state.todoList.map((todo) => {
        return todo.id === payload
          ? { ...todo, isFinish: !todo.isFinish }
          : todo;
      });
      const newTodoStatus = { ...state, todoList: newState };
      localStorage.setItem('todo', JSON.stringify(newTodoStatus));
      return { ...state, todoList: newState };
    case 'ASCEND_TODO_BY_CONTENT':
      let ascendList = parseJsonList.todoList.sort((a, b) =>
        a.content.localeCompare(b.content)
      );
      return { ...state, todoList: ascendList };
    case 'DESCEND_TODO_BY_CONTENT':
      let descendList = parseJsonList.todoList.sort((a, b) => b.content.localeCompare(a.content));
      return { ...state, todoList: descendList };
 case 'FILTER_TODO_BY_FINISH':
  // let finishTodo = parseJsonList.todoList.
  return state
    default:
      return state;
  }
};
export default reducer;
