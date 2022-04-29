
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





