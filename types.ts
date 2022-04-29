
//alias
type Age = number;
type Name = string;

type Player = {
    name: Name,
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