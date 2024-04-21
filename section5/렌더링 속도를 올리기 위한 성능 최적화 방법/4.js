function Parent() {
    const [selectedFruit, setSelectedFruit] = useState('apple');
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>{`count: ${count}`}</p>
            <button onClick={() => setCount(count + 1)}>inc count</button>
            {/**
             * onChange 이벤트 핸들러 함수에 
             * 상태값 변경 함수를 그대로 입력해주면, 해결이 가능하다.
            */}
            <SelectFruit
                selected={selectedFruit}
                onChange={setSelectedFruit(fruit)}
            />
            {/**
             * 만약에, onChange 이벤트 핸들러 함수에 간단한 처리를 하지 않고
             * 복잡한 다른 처리도 추가하고 싶다면, useCallback 훅을 사용하면 된다.
             * 이러한 문제를 해결 하기 위해서, 5.js 참조
             */}
            <SelectFruit
                selected={selectedFruit}
                onChange={setSelectedFruit(fruit)}
            />
        </div>
    )
}