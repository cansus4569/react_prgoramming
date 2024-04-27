function* f1() {
    yield 10;
    yield 20;
    return 'finished';
}

const gen = f1(); // 제너레이터 객체 반환됨

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

// f-1
// { value: 10, done: false }
// f-2
// { value: 20, done: false }
// f-3
// { value: 'finished', done: true}


// 다음 조건을 만족하는 객체는 반복자(iterator)이다.
// - next 메서드를 갖고 있다.
// - next 메서드는 value와 done 속성값을 가진 객체를 반환한다.
// - done 속성값은 작업이 끝날을 때 참이 된다.

// 즉, 제너레이터 객체는 반복자(iterator)이다.

//다음 조건을 만족하면 반복 가능(iterable)한 객체다.
// - Symbol.iterator 속성값으로 함수를 갖고 있다.
// - 해당 함수를 호출하면 반복자(iterator)를 반환한다.

console.log(gen[Symbol.iterator]() === gen); // true