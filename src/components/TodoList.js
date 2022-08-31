import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
function TodoList({ handleModal, searchValue, filterStatus }) {
  const todos = useSelector((state) => state.todos.todoList);
  let filterTodo = todos.filter((todo) => {
    return todo.content.toLowerCase().includes(searchValue.toLowerCase());
  });
  filterTodo =
    filterStatus !== ''
      ? todos.filter((todo) => todo.isFinish === filterStatus)
      : filterTodo;
  return (
    <ul className='max-h-[90%] overflow-x-hidden overflow-y-auto scroll-custom'>
      {filterTodo.length > 0 ? (
        filterTodo.map((todo) => {
          return (
              <TodoItem
                handleModal={handleModal}
                isFinish={todo.isFinish}
                key={todo.id}
                id={todo.id}
                textColor={todo.textColor}
                content={todo.content}
              />
          );
        })
      ) : (
        <div className='text-center italic font-bold'>
          -------No todo-------
        </div>
      )}
    </ul>
  );
}
export default TodoList;
