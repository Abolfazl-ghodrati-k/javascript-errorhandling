function processInput(input) {
    try {
        if (input < 0) {
            throw new Error("Negative input is not allowed");
        }
        // Some processing logic here
    } catch (error) {
        throw new Error(`Error in processInput: ${error.message}`);
    }
}

try {
    processInput(-1);
} catch (error) {
    console.error("Caught error:", error.message);
}
