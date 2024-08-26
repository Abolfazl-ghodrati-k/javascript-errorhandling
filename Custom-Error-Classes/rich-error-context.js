class RichErrorContext extends Error {
    constructor(message, context) {
        super(message);
        this.name = "RichErrorContext";
        this.context = context;
    }
}

function performOperation() {
    try {
        // Simulating an operation failure
        throw new Error("Operation failed");
    } catch (error) {
        throw new RichErrorContext(error.message, { operationId: 123, userId: 456 });
    }
}

try {
    performOperation();
} catch (error) {
    console.error("Error occurred:", error.message);
    console.log("Context:", error.context);
}
