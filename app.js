function outer() {
    const x = 0;
    function inner() {
        console.log(`inside inner:${x}`); //inner 렉시컬환경이 생성되고 그건 외부 outer 렉시컬환경을 참조한다.
    }
    return inner;
}

const innerFunc = outer();
innerFunc();