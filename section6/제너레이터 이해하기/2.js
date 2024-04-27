const arr = [10, 20, 30];
const iter = arr[Symbol.iterator]();
console.log(iter.next()); // { value: 10, done: false }

// 배열도 반복 가능한 객체이다. (iterable)

function* f1() {
    yield 10;
    yield 20;
    yield 30;
}

for (const v of f1()) {
    console.log(v);
}

const arr2 = [...f1()];
console.log(arr2); // [ 10, 20, 30 ]