// 함수 선언문 & 함수 호이스팅

console.log(getSquareSize(20)); //함수호이스팅으로 선언문 전에 호출가능하다. 변수에할당하면 불가능.

function getSquareSize(number) {
    return number * number;
}

// 함수 표현식
let square = function (number) {
    return number * number;
};

console.log(square(10));

//Function 생성자 함수
let triangle = new Function('number', 'return number * number/2');
console.log(triangle(10)); // 50

//복수값 반환

function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    return [area, volume]; // 복수 값의 반환
}

console.log('area is ' + getSize(3, 2, 3)[0]);   // area is 6
console.log('volume is ' + getSize(3, 2, 3)[1]); // volume is 18

//함수도 객체이기때문에 프로퍼티를 가질수 있다.

function squar(number) {
    return number * number;
}

squar.x = 10;
squar.y = 20;

console.log(squar.x, squar.y);