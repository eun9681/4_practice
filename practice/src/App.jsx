import { useState }from"react";
import TodoList from './TodoList'
function App() {

/*
  1. 할 일 추가
  2. 할 일 삭제
  3. 완료/미완료 상태 토글
  4. 완료된 항목 따로 표시
*/

/*
  분리할 컴포넌트
  1. TodoList 컴포넌트
  2. TodoItem 컴포넌트

*/


  // TODO 1: 할 일 목록 상태 만들기 (배열)
  // 데이터: {id:1, text: "공부하기", done:false}
  const [todos, setTodos] = useState([]);
  
  // TODO 2: 입력값 상태 만들기 (문자열)  
  const [text, setText] = useState("");

  // 추가 하기 함수
  function addTodo(){
    if(text.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    }
    setTodos([...todos, newTodo]);
    setText('');
  }

  // TodoList props로 전달할 toggleTodo, removeTodo
  function toggleTodo(id){
    setTodos((todo) =>{
      if(todo.id === id){
        //목표로한 id를 가진 todo의 done을 변경
        return {...todo, done: !todo.done}
      }
      return todo;
    })
  }
  //미완료 목록 todos
  const activeTodos = todos.filter(todo => !todo.done);
  //완료 목록 todos
  const complatedTodos = todos.filter(todo => !todo.done);

  function removeTodo(id){
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }
return (
<div>
  <h1>To-do App</h1>
  {/* TODO 3: 입력창 + 추가 버튼 */}
    <input 
      value={text}
      onChange={e => setText(e.target.value)}
    />
    <button onClick={addTodo}>추가</button>
  {/* TODO 4: 미완료 목록 출력 */}
    <TodoList
      title = {'할 일'}
      todos = {todos}
      onToggle = {toggleTodo}
      onRemove = {removeTodo}
    />
  {/* TODO 5: 완료 목록 출력 */}
    <TodoList
      title="완료된 일"
      todos={complatedTodos}
      onToggle={toggleTodo}
      onDelete={removeTodo}
    />
</div>
);
}
export default App;