function throwError() {
    throw new Error("This is a synchronous error");
}

try {
    throwError();
} catch (error) {
    console.error("Caught a synchronous error:", error.message);
}
