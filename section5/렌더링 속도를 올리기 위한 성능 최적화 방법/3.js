function Parent() {
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{`count: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>inc count</button>
            {/** 아래 자식 컴포넌트(memo 사용)는 부모가 렌더될 때, 렌더링이 된다. 
             * 이유 : onChange 함수가 매번 새로운 함수를 생성하기 때문에
             * 이러한 문제를 해결 하기 위해서, 4.js 참조
            */}
            <SelectFruit
                selected={selectedFruit}
                onChange={fruit => setSelectedFruit(fruit)}
            />
        </div>
    )
}