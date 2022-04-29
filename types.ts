
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

let d: unknown;

if (typeof d === 'number') {
    let e = d + 1;
}
if (typeof d === 'string') {
    let e = d.toUpperCase();
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


