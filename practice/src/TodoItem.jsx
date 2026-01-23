// TodoItem.jsx

/* 
  1. 완료 / 미완료 토글 버튼
  2. 삭제 버튼
*/

/*
  @props
  @todo -> {id:1, text: "공부하기", done:false}
  @onToggle -> 완료 / 미완료
  @onRemove -> 할 일 삭제 함수


*/

function TodoItem({ 
  todo,
  onToggle, 
  onRemove 
}){
  return(
    <li>
      <span style = {{textDecoration: todo.done ? 'line-through': 'none'}}>{todo.text}</span>
      <button onClick = {onToggle}>
        {
          todo.done ? '취소' : '완료'
        }
      </button>
      <button onClick = {onRemove}>삭제</button>
    </li>
  )
}

export default TodoItem;
  