function readFile() {
    try {
        // Simulating a file read error
        throw new Error("File read failed");
    } catch (error) {
        throw new Error(`ReadFileError: ${error.message}`);
    }
}

try {
    readFile();
} catch (error) {
    console.error("Caught wrapped error:", error.message);
}
