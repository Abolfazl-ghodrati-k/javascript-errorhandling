async function riskyOperation() {
    // Simulating an asynchronous operation that fails
    throw new Error("Something went wrong");
}

(async () => {
    try {
        await riskyOperation();
    } catch (error) {
        console.error("Error in async operation:", error.message);
    }
})();
