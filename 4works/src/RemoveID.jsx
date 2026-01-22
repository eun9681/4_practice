function RemoveID({items,text,onTextChange,onAdd,onRemove}){
    return(
        <section>
            <h2>List</h2>
            <input 
                value={text}
                onChange={e => onTextChange(e.target.value)}
            />
            <button onClick={onAdd}>추가</button>
            <ul>
                {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => onRemove(index)}>삭제</button>
                </li>
            ))}
            </ul>
        </section>
    )
}

export default RemoveID