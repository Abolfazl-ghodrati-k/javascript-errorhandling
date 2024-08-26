function addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError("Programmer Error: Arguments must be numbers");
    }
    return a + b;
}

try {
    addNumbers(5, "not a number");
} catch (error) {
    console.error("Caught a programmer error:", error.message);
}
