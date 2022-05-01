
//alias
type Age = number;
type Name = string;

type Player = {
    readonly name: Name, //수정 불가능하게만드는 좋은 readonly
    age?: Age
}

const playerCha: Player = {
    name: 'cha',
}

const playerCho: Player = {
    name: 'cho',
    age: 26
}

function playerMaker(name: string): Player {
    return {
        name,
    }
}

const cha = playerMaker('popo');
cha.age = 26;
// cha.name=  불가


//readony
const names: readonly string[] = ['1', '2'];

const player: readonly [string, number, boolean] = ['1', 2, true]; //정해진 순서와 타입 Tuple.

let a: undefined = undefined;
let b: null = null;

type User = {
    age?: number //number | undefined
}

//any -js로 가는법. ts의 보호에서 벗어나는법.
let c: any[] = [];

//unknown

let d: unknown; //뭔지모른다.

if (typeof d === 'number') {
    let e = d + 1; //number d
}
if (typeof d === 'string') {
    let e = d.toUpperCase(); //string d
}

//void -nothing return

//never - 함수가 절대 return 하지 않을떄

function hello(name: string | number) {
    if (typeof name === 'string') {
        name //string type name
    } else if (typeof name === 'number') {
        name //number type name
    } else {
        name //never type name 절대 실행되면 안된다.
    }
    throw new Error('xxx');
}

//function - call signicture
//argument 에 type을 명시하지 않으면 경고가뜸. -> 안쓰고싶음.
type Add = (a: number, b: number) => number;

const add = (a: number, b: number) => a + b;

const add2: Add = (a, b) => a + b; //경고가 뜨지않음 

//overloading 오버로딩
//함수가 여러개의 call signicture 을 가질때 발생.

type Config = {
    path: string
    config: Config

}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if (typeof config === 'string') { console.log(config) }
    else {
        console.log(config.path);
    }
}

//polymolphism (다형성) 

//bad
// type SuperPrint ={ //3개의 call signicture
//     (arr:number[]):void
//     (arr:boolean[]):void
//     (arr:string[]):void
// }

// const superPrint:SuperPrint = (arr)=>{
//     arr.forEach(i=>console.log(i))
// }

// superPrint([1,2,3,4])
// superPrint([true,false,true])
// superPrint(['1','2'])

//good
//제네릭 ,generic 은 placeholder 같은것. 확실한 타입을 모를때 generic 사용.
type SuperPrint = {
    <T>(arr: T[]): T
}

const superPrint: SuperPrint = (arr) => {
    return arr[0];
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true])
superPrint(['1', '2'])
superPrint([1, 2, 'ㄴㄴ', true])

//Class -ts
//abstract class(추상클래스) : 다른 클래스가 상속받을수 있는 클래스 이다.
abstract class Human {
    constructor(
        protected firstName: string,
        protected lastName: string,
        protected nickname: string
    ) { }
    abstract getNickName(): void //추상 메소드 는 추상클래스를 상속받는 모든 것들이 구현을 해야만 하는 메소드를 의미한다.

    getFullName() {
        return `${this.firstName}${this.lastName}`;
    }
}

class Man extends Human {
    getNickName() {
        console.log(this.nickname)
    }
}

const poo = new Man("차", "성현", "poo");

//interface - 오브젝트 모양을 특정해주기.

type Visiter = {
    name: string,
    age: number
}

const popo: Visiter = {
    name: 'popo',
    age: 1
}

type Color = "red" | "blue" | "yellow";
type Life = 1 | 5 | 10;
type Food = string;
type Health = 3 | 5 | 9;
type Frineds = Array<string>;
type Team = {
    teamName: string,
    team: Color
}

const kimchi: Food = 'kimchi';

const totonum: Team = {
    teamName: 'totonum',
    team: 'blue'
}

// type Person ={} === interface Person 둘다 object의 모양을 설명
interface Child {
    name: string
}
interface Person { //겹치면 ts가 하나로 합쳐줌.
    age: number
}

interface Person extends Child { //상속가능
}

const pooh: Person = {
    name: 'poo',
    age: 2
}








