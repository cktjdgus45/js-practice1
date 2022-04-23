function Cat(name) {
    this.name = name;
    this.printName = function () {
        console.log(`고양이이름양옹:${this.name}`)
    }
}
function Dog(name) {
    this.name = name;
    this.printName = function () {
        console.log(`강아지이름멍멍:${this.name}`)
    }
}


const cat = new Cat('쑤티');
const dog = new Dog('포포');

dog.printName = cat.printName;
dog.printName();