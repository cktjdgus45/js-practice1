const multiple = {
    [Symbol.iterator]: () => {
        let num = 0;
        const max = 10;
        return {
            next() {
                return { value: num++ * 2, done: num > max }
            }
        }
    }
}

for (const num of multiple) {
    console.log(num)
}