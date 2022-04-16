//콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

function calculator(a, b, action) { //action은 콜백함수/
    let result = action(a, b);
    console.log(result);
}

calculator(1, 2, add);