//동결! Object.freeze 추가x , 삭제x , 쓰기x , 속성 재정의x
// 객체에 대한 연산은 모두 shallow 얕게 된다. 즉, 얕은 꽁꽁얼림. man을 바꿀시 dog도 바뀜 , shallow freeze라서.
const man = { name: '차성현' };
const dog = { name: '포포', owner: man };
Object.freeze(dog);
dog.name = '보리';
dog.age = 4;
man.name = '차유정'; //얕은 동결이라 dog도 변경이 됨.
console.log(dog); //이름이 그대로 포포. 나이 프로퍼티도 추가 x.

//밀봉! Object.seal  추가x , 삭제x , (값의 수정)쓰기 o , 속성 재정의 x

const cat = {};
Object.assign(cat, dog); //assign 복사. == {...dog}

Object.seal(cat);
cat.name = "야옹이";
delete cat.owner;
console.log(cat)

//Object.isFrozen(obj),Object.isSealed(obj), Object.isExtensible(obj)

//확장 금지 preventExtensions 추가x , 쓰기o , 속성재정의 o , 삭제 o 

const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
tiger.name = "어흐응";
console.log(tiger)
delete tiger.name;
console.log(tiger)
tiger.age = 1;
console.log(tiger)