function printFibonacci(n) {
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        console.log(a);
        let temp = b;
        b = a + b;
        a = temp;
    }
}

printFibonacci(25);