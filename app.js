class Counter {
    #value;
    constructor(defaultValue) {
        if (isNaN(defaultValue) || defaultValue < 0) {
            this.#value = 0;
        } else {
            this.#value = defaultValue;
        }
    }
    increment() {
        this.#value++;
    }

    get value() {
        return this.#value;
    }
}
const counter = new Counter(0);
counter.increment(); // 1
counter.increment(); // 2

console.log(counter.value);
