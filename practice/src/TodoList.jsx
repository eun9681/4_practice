// TodoList.jsx
import TodoItem from './TodoItem'

/*
  @props

  @title
  @todos
  @onToggle
  @onRemove


*/


function TodoList({ 
  title, 
  todos, 
  onToggle, 
  onRemove
}) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {
          todos.map((todo)=>(
            <TodoItem
              key={todo.id}
              todo = {todo}
              onToggle = {() => onToggle(todo.id)}
              onRemove = {() => onRemove(todo.id)}
            />
          ))
        }
        
      </ul>
    </section>
  )
}


export default TodoList;