//StepCounter.jsx

/*
    현재 count 값 -> value
    카운트 증가 함수 -> onIncrease
    카운트 감수 함수 -> onDecrease
    몇 다누이 증감 할지 -> step
*/
function StepCounter({
    value,
    onIncrease,
    onDecrease,
    step
}) {
    return(
        <section>
            <h2>StepCounter</h2>
            <p>{value}</p>
            <button onClick={() => onIncrease(step)}>{ step }증가</button>
            <button onClick={() => onDecrease(step)}>{ step }감소</button>
        </section>
    
    )
}

export default StepCounter;