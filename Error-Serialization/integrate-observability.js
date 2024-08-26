class ObservabilityError extends Error {
    constructor(message, metadata) {
        super(message);
        this.name = "ObservabilityError";
        this.metadata = metadata;
    }

    logError() {
        // Simulate sending the error to an observability tool
        console.log("Logging error to observability tool:", {
            message: this.message,
            metadata: this.metadata,
            stack: this.stack,
        });
    }
}

try {
    // Simulate an error occurring
    throw new ObservabilityError("Critical failure", { userId: 789, transactionId: 101112 });
} catch (error) {
    if (error instanceof ObservabilityError) {
        error.logError();
    }
}
