function SelectFruit({ selectedFruit, onChange }) {
    // ...

    // maxPrice 값이 변경될 때만, fruits 값이 변경되도록 수정
    const fruits = useMemo(() => FRUITS.filter(item => item.price <= maxPrice), [maxPrice]);

    return (
        <div>
            <Select options={fruits} selected={selectedFruit} onChange={onChange} />
        </div>
    )
}

const FRUITS = [
    { name: 'apple', price: 500 },
    { name: 'banana', price: 1000 },
    { name: 'orange', price: 1500 },
]