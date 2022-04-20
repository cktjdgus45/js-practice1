print(); //함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌.
//함수의 선언문은 선언 이전에도 호출이 가능함.

function print() { //함수의 선언.
    console.log('hello')
}


//변수(let,const)와 클래스는 선언만 호이스팅이 되고 , 즉 변수의 이름 hi는 인지하는데 초기화까진 호이스팅이 되지 않음.
//초기화는 안됨
//초기화 전 , 변수에 접근하면 컴파일 에러가 발생.
console.log(hi);
let hi = 'hi';

const cat = new Cat();

class Cat {

}

let x = 1;
{
    console.log(x);
    let x = 2; //블록 내부에서 스코프체인에 의해 가까운걸 받지만 밑에있으므로 선언만 되고 초기화가 안되서 에러.
}