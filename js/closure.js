// “A closure is the combination of a function and the lexical environment within which that function was declared.”
// 클로저는 함수와 그 함수가 선언됐을 때의 렉시컬 환경(Lexical environment)과의 조합이다.

function outerFunc() {
    var x = 10;
    var innerFunc = function () { console.log(x); };
    innerFunc();
}

outerFunc(); // 10