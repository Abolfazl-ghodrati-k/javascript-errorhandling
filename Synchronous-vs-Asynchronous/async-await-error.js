async function asyncFunctionWithError() {
    throw new Error("This error is in an async function");
}

(async () => {
    try {
        await asyncFunctionWithError();
    } catch (error) {
        console.error("Caught an async function error:", error.message);
    }
})();
