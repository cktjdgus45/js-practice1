//추상 클래스

abstract class Ape {
    constructor(
        protected firstName: string,
        protected lastName: string
    ) { }
    abstract fullName(): string
    abstract sayHi(name: string): string
}

class Ape2 extends Ape {
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    sayHi(name: string) {
        return ` hello ${name} ! my name is ${this.fullName}`;
    }
}

//interface를 class처럼 .

interface ApeCopy { //클래스의 모양을 특정할수 있게해준다 . 오브젝트의 모양도.
    firstName: string
    lastName: string
    sayHi(name: string): string
    fullName(): string
}

interface Humany {
    health: number
}

class Ape2Copy implements ApeCopy {
    constructor(
        public firstName: string,
        public lastName: string
    ) { }
    sayHi(name: string): string {
        return ` hello ${name} ! my name is ${this.fullName}`;
    }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

//polymolphism

interface SStorage<T> {
    [key: string]: T
}

class LocalStorage<T>  {
    private storage: SStorage<T> = {}
    set(key: string, value: T) {
        this.storage[key] = value;
    }
    remove(key: string) {
        delete this.storage[key];
    }
    get(key: string): T {
        return this.storage[key]
    }
    clear() {
        this.storage = {};
    }

}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get("key")

const booleanStorage = new LocalStorage<boolean>();

booleanStorage.get('xxx');

const numberStorage = new LocalStorage<number>();

numberStorage.get('num');