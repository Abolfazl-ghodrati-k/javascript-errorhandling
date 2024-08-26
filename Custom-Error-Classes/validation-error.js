class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUserInput(input) {
    if (input === "") {
        throw new ValidationError("Input cannot be empty", "username");
    }
}

try {
    validateUserInput("");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation failed on field '${error.field}': ${error.message}`);
    }
}
