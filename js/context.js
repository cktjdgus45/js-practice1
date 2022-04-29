// 실행 컨텍스트는 실행 가능한 코드가 실행되기 위해 필요한 환경

var x = 'xxx';

function foo() {
    var y = 'yyy';

    function bar() {
        var z = 'zzz';
        console.log(x + y + z);
    }
    bar();
}
foo();