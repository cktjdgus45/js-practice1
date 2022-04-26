//1.객체 리터럴 생성
const obj = {
    prop1: '사람',
    prop2: 'age'
}

console.log(obj.prop1)

//2.Object 생성자 함수
let person = new Object();
person.name = '차성현';
person.age = '26';
person.sayHello = function () {
    console.log('Hi! My name is ' + this.name);
};

person.sayHello()

//3. 생성자 함수 . 1,2는 여러가지 객체를 생성할때 불편하기떄문에 클래스 같은 템플릿을 만드는 생성자 함수를 사용하면 좋다
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log('Hi My name is' + this.name);
    }
}

const person1 = new Person('포포', 1);
const person2 = new Person('오오', 2);

console.log(person1, person2)