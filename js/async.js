//비동기 동기
function func1() {
    console.log('func1');
    func2();
}

function func2() {
    setTimeout(function () { //테스크큐로 넘어가고 콜스택이비워질때까지 대기한다.
        console.log('func2');
    }, 0);

    func3();
}

function func3() {
    console.log('func3');
}

func1();