class SerializableError extends Error {
    constructor(message, code) {
        super(message);
        this.name = "SerializableError";
        this.code = code;
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            code: this.code,
            stack: this.stack,
        };
    }
}

function generateError() {
    return new SerializableError("Something went wrong", 500);
}

const error = generateError();
console.log("Serialized error:", JSON.stringify(error));
