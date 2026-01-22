import React, { useState } from 'react';

function ObjectState() { // 파일명과 컴포넌트명 일치시키는 게 좋음
  const [player, setPlayer] = useState({
    name: '홍길동',
    hp: 100,
    mp: 100,
  });

  function takeDamage(amount) {
    // 0 미만으로 hp가 변경되지 않도록
    setPlayer({
      ...player,
      hp: Math.max(player.hp - amount, 0),
    });
  }

  function heal(amount) {
    // 100을 초과하는 hp가 되지않도록
    setPlayer({
      ...player,
      hp: Math.min(player.hp + amount, 100),
      mp: Math.max(player.mp - 10, 0),
    });
  }
  /*
    객체 상태 -> spread 패턴으로 수정
    상태 불변성을 지키기

  */
  return (
    <section>
      <h2>객체 기반 상태 변경</h2>
      <p>이름: {player.name}</p>
      <p>체력: {player.hp}</p>
      <p>마나: {player.mp}</p>
      {/* 조건 렌더링 */}
      {/*
        React를 사용하면 DOM으로 제어X
        UI자체를 조건으로 교체
      */}
      {
        player.hp === 0 ?  (<p>사망</p>) : (
            <>
                <button onClick={() => takeDamage(10)}>데미지</button>
                <button onClick={() => heal(10)}>회복</button>
            </>
        )
      }
      
    </section>
  );
}

export default ObjectState;
