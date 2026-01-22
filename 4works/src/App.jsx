import { useState } from 'react'
import StepCounter from './StepCounter'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // useState(0) -> 상태 초기값
  //count -> 현재 상태 값
  //setCount -> 상태 변경 함수
  // 버튼 클릭 -> 함수 실행 -> 상태 변경 -> 화면 자동 업데이트
  const [items,setItems] = useState([]);
  // 화면을 바꾸는 데이터
  const [text,setText] = useState('');

  function increase(step = 1){
    setCount(count + step);
  }
  function decrease(step = 1){
    setCount(count - step);
  }

  function addItem(){
    if (text === '') return;
    setItems([...items,text]);
    /*
      기존 배열 직접 수정 X
      새로운 배열 만들어서 교체
    */

    setText('');
  }
  function removeItem(items){
    setItems(
      items.filter((_, i) => i !== index)
    )
  }
  
  return (
    <>
    <section>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </section>
    <section>
      <h2>List</h2>
      <input value={text} onChange={e => setText(e.target.value)}></input>
      {/*
        input값은 입력값도 상태로 관리를 합니다.
      */}
      <button onClick={addItem}>추가</button>
      <ul>
        {
          /*
            .map 등 배열을 통해 여러개의 컴포넌트가 만들어질 때,
            React가 구분하기 위한 ID가 필요하다
            예시) key={item}
          */
        }
        {items.map((item) => <li key={item}>
          {item}
          <button onClick={() => removeItem(index)}>삭제</button>
        </li>)}
      </ul>
    </section>
    <StepCounter>
      value={count}
      onIncrease={increase}
      onDecrease={decrease}
      step={5}
    </StepCounter>
    </>
  )
}

export default App
