//왜 클로져가 필요한것인지.
//내부정보를 은닉하고 , 공개함수(public)를 통한 데이터 조작을 위해 사용한다.
//캡슐화와 정보은닉
//클래스 private 사용하는것과 똑같은 효과.
//지금은 prvate있지만 옛날버전에선 없었기때문에 클로저특징을 통해 정보를 은닉함.

function makeCounter() {
    let count = 0;
    function increase() {
        count++;
        console.log(count);
    }
    return increase;
}

const increaseFunc = makeCounter();

increaseFunc();
increaseFunc();
increaseFunc();

//class로 대체가능

class Counter {
    #count = 0;
    increase() {
        this.#count++;
        console.log(this.#count);
    }
}

const counter = new Counter();
counter.increase();
